import './q-list.scss';
import { Questions } from "../../../config/types";
import { SyntheticEvent, useState } from "react";
import Modal from "../../Modal";

type Props = {
  list: Questions[];
  selected: Questions[];
  questionsChart: Questions[];
  hiddenActive: boolean;
  substring: string;
  onToggle: (item: Questions) => void;
  onSelectChart: (item: Questions) => void;
};

const QuestionsList = ({ list, substring, selected, questionsChart, hiddenActive, onToggle, onSelectChart }: Props) => {

  const [detail, setDetail] = useState<boolean>(false);

  const createText = (value: string, text: string) => {
    const start = value.toLowerCase().indexOf(text.toLowerCase());

    if (start < 0) {
      return text;
    }

    const prefix = value.substring(0, start);
    const end = start + text.length;
    const root = value.substring(start, end);

    return (
      <span className="mark-text">
        <span>{prefix}</span>
        <span className="mark-text__value">{root}</span>
        <span>{value.substring(end, value.length)}</span>
      </span>
    );
  };

  const handleDetail = (event: SyntheticEvent) => {
    event.stopPropagation();
    setDetail(true);
  };

  return (
    <>
      <ul className="q-list">
        {list.map((item) => (
          <li
            className={`q-list__item ${hiddenActive && item.isHidden && 'q-list__item--hidden'}`}
            key={item.id}
          >
            <div className={`q-list__item__icon ${questionsChart.some((chart) => chart.id === item.id) && 'q-list__item__icon--selected'}`} onClick={() => onSelectChart(item)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.561496 0.000102157C0.410847 0.00293928 0.267396 0.0650475 0.162277 0.172947C0.0571578 0.280846 -0.00114681 0.42583 1.70968e-05 0.576431V15.425C-0.000558552 15.5763 0.0588887 15.7217 0.16534 15.8294C0.271792 15.937 0.416572 15.998 0.567974 15.9992H15.4277C15.5795 15.9992 15.7251 15.9389 15.8324 15.8316C15.9397 15.7244 16 15.5789 16 15.4272C16 15.2755 15.9397 15.13 15.8324 15.0227C15.7251 14.9154 15.5795 14.8551 15.4277 14.8551H1.14241V0.576431C1.143 0.500034 1.12827 0.424293 1.0991 0.353678C1.06992 0.283063 1.02689 0.219005 0.972544 0.165285C0.918196 0.111565 0.853632 0.069272 0.782662 0.0409015C0.711693 0.0125311 0.637917 -0.00134162 0.561496 0.000102157ZM15.4148 3.71278C15.2671 3.71774 15.127 3.77962 15.0239 3.88547L9.16076 9.74589L6.70321 7.04772C6.60097 6.93659 6.45891 6.87037 6.30802 6.86349C6.15713 6.85662 6.00964 6.90965 5.8977 7.01103L2.47052 10.1495C2.41104 10.1991 2.36225 10.2602 2.3271 10.3292C2.29194 10.3982 2.27116 10.4736 2.26601 10.5508C2.26086 10.6281 2.27145 10.7055 2.29713 10.7786C2.32281 10.8516 2.36306 10.9186 2.41543 10.9757C2.4678 11.0327 2.53121 11.0785 2.60181 11.1103C2.67241 11.1421 2.74874 11.1593 2.82617 11.1608C2.9036 11.1622 2.98053 11.148 3.05228 11.1189C3.12404 11.0897 3.18914 11.0464 3.24364 10.9914L6.24971 8.24139L8.71589 10.9568C8.76785 11.0141 8.83087 11.0602 8.90115 11.0924C8.97144 11.1247 9.04753 11.1423 9.12483 11.1443C9.20213 11.1464 9.27904 11.1327 9.35091 11.1042C9.42278 11.0757 9.48812 11.0329 9.543 10.9784L15.8272 4.69276C15.9084 4.61224 15.9635 4.50928 15.9856 4.39714C16.0076 4.28501 15.9955 4.16884 15.9509 4.06362C15.9063 3.9584 15.8312 3.86895 15.7352 3.8068C15.6393 3.74466 15.5269 3.71266 15.4126 3.71494L15.4148 3.71278Z" fill="#908F90"/>
              </svg>
            </div>

            <div
              className="form-group form-group--dashed"
              onClick={() => onToggle(item)}
            >
              <input
                checked={selected.some((sel) => sel.id === item.id)}
                type="checkbox" />
              <label>
              <span className="text q-list__item-text" onClick={handleDetail}>
                {substring.length > 1 ? createText(item.label, substring) : item.label}
              </span>
              </label>
            </div>

            <span className="q-list__item__count">
            {item.count}
          </span>
          </li>
        ))}
      </ul>
      {detail && (
        <Modal
          onClose={() => setDetail(false)}
        >
          <div className="modal-content q-list__modal">

            <div className="q-list__modal-content">
              <div className="q-list__modal-title">
                КОГДА ДОСТАВЯТ ЗАКАЗ?
              </div>

              Когда будет доставлен заказ? <br/>
              Когда доставят заказ? <br/>
              Когда будет доставлен заказ? <br/>
              Когда будет доставка заказа? <br/>
              Когда привезут заказ? <br/>
              Когда заказ будет доставлен? <br/>
              Когда планируется доставка заказа? <br/>
              Когда доставят мой заказ? <br/>
              Когда будет доставлен мой заказ? <br/>
              Когда привезут заказ?
              Когда придет заказ? <br/>
              Когда мне привезут мой заказ? <br/>
              Когда доставят заказ ? <br/>
              Когда будет доставка заказа? <br/>
              Когда будет доставлен мой заказ, не могу уже больше ждать? <br/>
              Когда  привезут заказ? <br/>
              Когда привезут заказ? <br/>
              Когда доставят заказ? <br/>
              Когда привезут мой заказ? <br/>
              Когда приедет заказ ? <br/>
              Когда доставите заказ? <br/>
            </div>

            <div className="q-list__modal-content">
              <div className="q-list__modal-title">
                КОГДА ДОСТАВЯТ ЗАКАЗ?
              </div>

              Когда будет доставлен заказ? <br/>
              Когда доставят заказ? <br/>
              Когда будет доставлен заказ? <br/>
              Когда будет доставка заказа? <br/>
              Когда привезут заказ? <br/>
              Когда заказ будет доставлен? <br/>
              Когда планируется доставка заказа? <br/>
              Когда доставят мой заказ? <br/>
              Когда будет доставлен мой заказ? <br/>
              Когда привезут заказ?
              Когда придет заказ? <br/>
              Когда мне привезут мой заказ? <br/>
              Когда доставят заказ ? <br/>
              Когда будет доставка заказа? <br/>
              Когда будет доставлен мой заказ, не могу уже больше ждать? <br/>
              Когда  привезут заказ? <br/>
              Когда привезут заказ? <br/>
              Когда доставят заказ? <br/>
              Когда привезут мой заказ? <br/>
              Когда приедет заказ ? <br/>
              Когда доставите заказ? <br/>
            </div>

            <div className="q-list__modal-content">
              <div className="q-list__modal-title">
                КОГДА ДОСТАВЯТ ЗАКАЗ?
              </div>

              Когда будет доставлен заказ? <br/>
              Когда доставят заказ? <br/>
              Когда будет доставлен заказ? <br/>
              Когда будет доставка заказа? <br/>
              Когда привезут заказ? <br/>
              Когда заказ будет доставлен? <br/>
              Когда планируется доставка заказа? <br/>
              Когда доставят мой заказ? <br/>
              Когда будет доставлен мой заказ? <br/>
              Когда привезут заказ?
              Когда придет заказ? <br/>
              Когда мне привезут мой заказ? <br/>
              Когда доставят заказ ? <br/>
              Когда будет доставка заказа? <br/>
              Когда будет доставлен мой заказ, не могу уже больше ждать? <br/>
              Когда  привезут заказ? <br/>
              Когда привезут заказ? <br/>
              Когда доставят заказ? <br/>
              Когда привезут мой заказ? <br/>
              Когда приедет заказ ? <br/>
              Когда доставите заказ? <br/>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default QuestionsList;
