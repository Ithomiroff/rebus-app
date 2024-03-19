import RebusSelect from "../../RebusSelect";
import Modal from "../../Modal";
import React, { SyntheticEvent, useState } from "react";
import { QuestionMarks, Questions, SelectOption } from "../../../config/types";
import { MARKS } from "../../../config/Mocks";

type Props = {
  mode: 'add' | 'remove';
  selected: Questions[];
  onSave: (values: Questions[]) => void;
  onClose: () => void;
};

const MarksManageModal = ({ mode, selected, onClose, onSave }: Props) => {

  const [values, setValues] = useState<SelectOption[]>([]);

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();

    const result = selected.map((item) => {
      if (mode === 'add') {
        item.marks = [...item.marks || [], ...values.map((opt: SelectOption) => opt.value)] as QuestionMarks[]
      } else {
        item.marks = item.marks?.filter((mark) => {
          return values.some((val) => val.value === mark);
        })
      }
      return item;
    });

    onSave(result);
  };

  return (
    <Modal
      onClose={onClose}
    >
      <form
        className="modal-inner"
        onSubmit={handleAdd}
      >
        <div className="modal-title">{mode === 'add' ? 'Добавить метку' : 'Удалить метку'}</div>
        <div className="modal-content">
          <RebusSelect
            placeholder="Название метки"
            options={MARKS}
            value={values}
            onChange={setValues}
          />
        </div>
        <div className="modal-actions">
          <button
            data-secondary="true"
            onClick={onClose}
          >Отменить</button>
          <button
            data-accent="true"
            type="submit"
          >{mode === 'add' ? 'Добавить' : 'Удалить'}</button>
        </div>
      </form>
    </Modal>
  )
};

export default MarksManageModal;