import QuestionsList from "../List";
import QuestionsFilter from "../Filter";
import QuestionsActionsPanel from "../ActionsPanel";
import { QuestionBadge, Questions } from "../../../config/types";
import { useMemo, useState } from "react";

const QuestionsContainer = ({ list }: { list: Questions[] }) => {

  const [filter, setFilter] = useState<string>('');
  const [selected, setSelected] = useState<Questions[]>([]);
  const [badgeFilter, setBadgeFilter] = useState<QuestionBadge>('all');

  const filtered = useMemo(() => {
    const result = badgeFilter === 'all' ? list : list.filter((item) => item.badge === badgeFilter);

    if (filter.length > 1) {
      return result.filter(item => item.label.indexOf(filter) >= 0);
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

  return (
    <div className="questions">
      <input
        type="text"
        placeholder="Поиск..."
        value={filter}
        onChange={({ target }) => setFilter((target as HTMLInputElement).value)}
      />
      <div className="questions-list">
        <div className="questions-list__header">
          <QuestionsFilter
            filter={badgeFilter}
            onChange={(value) => setBadgeFilter(prev => prev === value ? 'all' : value)}
          />
          <span>Кол-во</span>
        </div>
        <QuestionsList
          selected={selected}
          substring={filter}
          list={filtered}
          onToggle={handleToggle}
        />
      </div>
      {selected.length > 0 && (
        <QuestionsActionsPanel
          items={selected}
        />
      )}
    </div>
  );
};

export default QuestionsContainer;