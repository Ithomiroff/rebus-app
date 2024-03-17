import React, { useCallback, useEffect, useRef, useState } from "react";
import './q-filter.scss';
import { setRef } from "@mui/material";

type Variant = {
  id: number;
  count: number;
  label: string;
  type: string;
};

const VARIANTS: Variant[] = [
  {
    id: 0,
    count: 833,
    label: 'Все вопросы',
    type: 'all',
  },
  {
    id: 1,
    count: 790,
    label: 'Без метки',
    type: 'empty',
  },
  {
    id: 2,
    count: 109,
    label: 'Маркетинг',
    type: 'marketing',
  },
  {
    id: 3,
    count: 30,
    label: 'Логисты',
    type: 'logists',
  },
  {
    id: 4,
    count: 3,
    label: 'Колл-центр',
    type: 'call',
  }
];

const QuestionsFilter = () => {

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

  return (
    <div className="filter">
      <button
        className={`filter-btn ${open && 'filter-btn--open'}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="filter-btn__text">Все вопросы <span className="filter-btn__text-inner">(833)</span></span>
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
            {VARIANTS.map((item) => (
              <li className="filter-dd-variants__item">
                <div className="form-group">
                  <input checked type="checkbox" />
                  <label className="filter-dd-variants__item__label">
                    <span className="text">
                      {item.label} <span className="text">({item.count})</span>
                    </span>
                  </label>
                </div>
              </li>
            ))}
            <span className="divider"></span>
            <li className="filter-dd-variants__item">
              <div className="form-group">
                <input checked type="checkbox" />
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