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
        <Box sx={{ fontSize: 18 }}>{currentPeriod}</Box>
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