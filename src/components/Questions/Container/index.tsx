import QuestionsList from "../List";
import QuestionsFilter from "../Filter";
import QuestionsActionsPanel from "../ActionsPanel";
import { Questions, QuestionsFilterItem } from "../../../config/types";
import React, { SyntheticEvent, useMemo, useState } from "react";
import Modal from "../../Modal";
import MarksManageModal from "../AddMarksModal";
import { FILTER_VARIANTS } from "../../../config/Mocks";

type Props = {
  list: Questions[];
  questionsChart: Questions[];
  onChange: (list: Questions[]) => void;
  onSelectChart: (item: Questions) => void;
};

const QuestionsContainer = ({ list, questionsChart, onChange, onSelectChart }: Props) => {

  const [filter, setFilter] = useState<string>('');
  const [selected, setSelected] = useState<Questions[]>([]);

  const [badgeFilter, setBadgeFilter] = useState<QuestionsFilterItem[]>(FILTER_VARIANTS);

  const [unionName, setUnionName] = useState<string | null>(null);
  const [markManageModal, setMarkManageModal] = useState<'add' | 'remove' | null>(null);

  const filtered = useMemo(() => {
    if (badgeFilter.length === 0) {
      return [];
    }

    const isAll = badgeFilter.some((item) => item.type === 'all');

    let result = list;

    if (!isAll) {
      badgeFilter.forEach((filter) => {
        if (filter.type === 'hidden') {
          result = result.filter((item) => item.isHidden);
        }
        if (filter.type === null) {
          const filtered = result.filter((item) => item.marks.length === 0);
          result = filtered.length > 0 ? filtered : result;
        }
        if (filter.type === 'marks' && filter.markType) {
          const filtered = result.filter((item) => filter.markType && item.marks.includes(filter.markType));
          result = filtered.length > 0 ? filtered : result;
        }
      });
    }

    if (filter.length > 1) {
      return result.filter(item => item.label.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
    }
    return result;
  }, [list, filter, badgeFilter]);

  const handleToggle = (item: Questions) => {
    if (selected.find((sel) => sel.id === item.id)) {
      setSelected((prev) => prev.filter((sel) => sel.id !== item.id));
    } else {
      setSelected((prev) => ([...prev, item]));
    }
  };

  const onHide = () => {
    const result = list.map((item) => {
      if (selected.find(sel => sel.id === item.id)) {
        item.isHidden = true;
      }
      return item;
    });
    onChange(result);
    setSelected([]);
  };

  const onShow = () => {
    const result = list.map((item) => {
      if (selected.find(sel => sel.id === item.id)) {
        item.isHidden = false;
      }
      return item;
    });
    onChange(result);
    setSelected([]);
  };

  const handleUnion = (event: SyntheticEvent) => {
    event.preventDefault();

    const result: Questions[] = [];

    list.forEach((item) => {
      const forUnion = selected.some((sel) => sel.id === item.id);

      if (!forUnion) {
        result.push(item);
      }
    });

    result.push({
      id: +new Date(),
      label: unionName || '',
      badge: null,
      count: selected.reduce((acc, value) => acc + value.count, 0),
      marks: [],
    });

    onChange(result);
    setSelected([]);
    setUnionName(null);
  };

  const handleSaveAddRemove = (questions: Questions[]) => {
    const result = list.map((item) => {
      const forUpdate = questions.find((sel) => sel.id === item.id);

      if (forUpdate) {
        return forUpdate;
      }
      return item;
    });
    onChange(result);
    setSelected([]);
    setMarkManageModal(null);
  };

  return (
    <div className="questions">
      <div className="questions__input">
        <input
          type="text"
          placeholder="Поиск..."
          value={filter}
          onChange={({ target }) => setFilter((target as HTMLInputElement).value)}
        />
      </div>
      <div className="questions-list">
        <div className="questions-list__header">
          <QuestionsFilter
            filter={badgeFilter}
            onChange={setBadgeFilter}
          />
          <span className="questions-list__count">Кол-во</span>
        </div>
        <QuestionsList
          hiddenActive={badgeFilter.some((item) => item.type === 'hidden')}
          questionsChart={questionsChart}
          selected={selected}
          substring={filter}
          list={filtered}
          onToggle={handleToggle}
          onSelectChart={onSelectChart}
        />
      </div>
      {selected.length > 0 && (
        <QuestionsActionsPanel
          onClose={() => setSelected([])}
          onHide={onHide}
          onShow={onShow}
          onUnion={() => setUnionName('')}
          onAdd={() => setMarkManageModal('add')}
          onRemove={() => setMarkManageModal('remove')}
        />
      )}
      {unionName !== null && (
        <Modal
          onClose={() => setUnionName(null)}
        >
          <form
            className="modal-inner"
            onSubmit={handleUnion}
          >
            <div className="modal-title">Название после объединения</div>
            <div className="modal-content">
              <input
                type="text"
                onChange={({ target }) => setUnionName(target.value)}
              />
            </div>
            <div className="modal-actions">
              <button
                data-secondary="true"
                onClick={() => setUnionName(null)}
              >Отменить</button>
              <button
                data-accent="true"
                type="submit"
              >Сохранить</button>
            </div>
          </form>
        </Modal>
      )}
      {markManageModal === 'add' && (
        <MarksManageModal
          mode="add"
          selected={selected}
          onClose={() => setMarkManageModal(null)}
          onSave={handleSaveAddRemove}
        />
      )}
      {markManageModal === 'remove' && (
        <MarksManageModal
          mode="remove"
          selected={selected}
          onClose={() => setMarkManageModal(null)}
          onSave={handleSaveAddRemove}
        />
      )}
    </div>
  );
};

export default QuestionsContainer;