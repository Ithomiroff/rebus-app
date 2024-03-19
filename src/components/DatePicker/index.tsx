import React, { useMemo, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@mui/material";
import dayjs from "dayjs";

import './picker.scss';

const FROM = new Date(2024, 0, 31);
const TO = new Date(2024, 1, 14);

const Picker = () => {
  const [date, setDate] = useState<[Date | null, Date | null]>([FROM, TO]);

  const [open, setOpen] = useState<boolean>(false);

  const currentPeriod = useMemo(() => {
    const res: string[] = [];

    if (date[0]) {
      res.push(dayjs(date[0]).format('DD/MM/YYYY'))
    }
    if (date[1]) {
      res.push(dayjs(date[1]).format('DD/MM/YYYY'))
    }

    return res.length === 2 ? res.join(' — ') : res[0];
  }, [date]);

  return (
    <div className="picker">
      <button
        onClick={() => setOpen(prev => !prev)}
      >
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 5.5V1.5M14 5.5V1.5M5 9.5H15M3 19.5H17C18.1046 19.5 19 18.6046 19 17.5V5.5C19 4.39543 18.1046 3.5 17 3.5H3C1.89543 3.5 1 4.39543 1 5.5V17.5C1 18.6046 1.89543 19.5 3 19.5Z" stroke="#908F90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {currentPeriod}
      </button>
      {open && (
        <DatePicker
          open
          selectsRange
          inline
          startDate={date[0]}
          endDate={date[1]}
          onChange={(date) => setDate(date as [Date | null, Date | null])}
          monthsShown={2}
          onClickOutside={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default Picker;