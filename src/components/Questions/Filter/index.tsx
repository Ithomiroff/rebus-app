import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import './q-filter.scss';
import { FILTER_VARIANTS } from "../../../config/Mocks";
import { QuestionsFilterItem } from "../../../config/types";

type Props = {
  filter: QuestionsFilterItem[];
  onChange: (value: QuestionsFilterItem[]) => void;
}

const HIDDEN = FILTER_VARIANTS.find((item) => item.type === 'hidden') as QuestionsFilterItem;

const QuestionsFilter = ({ filter, onChange }: Props) => {

  const [open, setOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const handler = useCallback(({ target }: Event) => {
    if (!ref.current?.contains(target as HTMLElement)) {
      setOpen(false);
    }
  }, [setOpen]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        document.addEventListener('click', handler);
      })
    } else {
      document.removeEventListener('click', handler);
    }
    return () => document.removeEventListener('click', handler);
  }, [open]);

  const handleChange = (item: QuestionsFilterItem, checked: boolean) => () => {
    if (item.type === 'all') {
     if (checked) {
       onChange(FILTER_VARIANTS);
     } else {
       onChange([]);
     }
    } else {
      if (checked) {
        onChange([...filter, item]);
      } else {
        onChange(filter.filter((fil) => fil.id !== item.id));
      }
    }
  };

  const title = useMemo(() => {
    if (filter.length === 0) {
      return (
        <span className="filter-btn__text">
          Не выбрано
        </span>
      )
    }
    if (filter.length === FILTER_VARIANTS.length) {
      return (
        <span className="filter-btn__text">
          Все вопросы &nbsp;
          <span className="filter-btn__text-inner">
            (893)
          </span>
        </span>
      );
    }
    if (filter.length === 1) {
      return (
        <span className="filter-btn__text">
          {filter[0].label} &nbsp;
          <span className="filter-btn__text-inner">
            ({filter[0].count})
          </span>
        </span>
      );
    }

    return (
      <span className="filter-btn__text">
        Выбрано несколько меток
      </span>
    )

  }, [filter]);

  const hiddenActive = filter.some((filItem) => filItem.type === 'hidden');

  return (
    <div className="filter">
      <button
        className={`filter-btn ${open && 'filter-btn--open'}`}
        onClick={() => setOpen(prev => !prev)}
      >
        {title}
        <span>
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3346 7.83203L8.00131 12.1654L3.66797 7.83203" stroke="#B4B4B4" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      {open && (
        <div className="filter-dd" ref={ref}>
          <span className="filter-dd__title">Метки</span>
          <ul className="filter-dd-variants">
            {FILTER_VARIANTS.filter((item) => item.type !== 'hidden').map((item) => {
              const checked = filter.some((filItem) => filItem.id === item.id);
              return (
                <li className="filter-dd-variants__item">
                  <div
                    className="form-group"
                    onClick={handleChange(item, !checked)}
                  >
                    <input
                      checked={checked}
                      type="checkbox"/>
                    <label className="filter-dd-variants__item__label">
                    <span className="text">
                      {item.label} <span className="text">({item.count})</span>
                    </span>
                    </label>
                  </div>
                </li>
              )
            })}
            <span className="divider"></span>
            <li className="filter-dd-variants__item">
              <div
                className="form-group"
                onClick={handleChange(HIDDEN, !hiddenActive)}
              >
                <input
                  checked={hiddenActive}
                  type="checkbox" />
                <label className="filter-dd-variants__item__label">
                  <span className="text">Скрытые (83)</span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
};


export default QuestionsFilter;