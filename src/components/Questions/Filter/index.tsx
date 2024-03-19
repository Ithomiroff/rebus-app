import React, { useCallback, useEffect, useRef, useState } from "react";
import './q-filter.scss';
import { FILTER_VARIANTS } from "../../../config/Mocks";
import { QuestionBadge } from "../../../config/types";

type Props = {
  filter: QuestionBadge;
  onChange: (value: QuestionBadge) => void;
}

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

  const activeItem = FILTER_VARIANTS.find((item) => item.type === filter);

  return (
    <div className="filter">
      <button
        className={`filter-btn ${open && 'filter-btn--open'}`}
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="filter-btn__text">{activeItem?.label} <span className="filter-btn__text-inner">({activeItem?.count})</span></span>
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
            {FILTER_VARIANTS.filter((item) => item.type !== 'hidden').map((item) => (
              <li className="filter-dd-variants__item">
                <div
                  className="form-group"
                  onClick={() => onChange(item.type)}
                >
                  <input
                    checked={filter === item.type}
                    type="checkbox"/>
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
              <div
                className="form-group"
                onClick={() => onChange('hidden')}
              >
                <input
                  checked={filter === 'hidden'}
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