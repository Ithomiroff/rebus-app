import React, { useMemo, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Box, Button, styled } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import dayjs from "dayjs";

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  position: 'relative',

  '& .react-datepicker': {
    position: 'absolute',
    left: 0,
    top: theme.spacing(23),
    background: '#252525',
    border: 'none',
    borderRadius: theme.spacing(9),
    paddingBottom: theme.spacing(16),
  },
  '& .react-datepicker__header': {
    background: '#252525',
    borderTopRightRadius: theme.spacing(9),
    borderTopLeftRadius: theme.spacing(9),
    paddingTop: 0,
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(14),
    paddingRight: theme.spacing(14),
    border: 'none',
  },
  '& .react-datepicker__month': {
    margin: 0,
  },
  '& .react-datepicker__triangle': {
    display: 'none',
  },
  '& .react-datepicker__navigation': {
    top: theme.spacing(8),
  },
  '& .react-datepicker__current-month': {
    color: '#B4B4B4',
    fontFamily: 18,
    fontWeight: 600,
    paddingTop: theme.spacing(11),
  },
  '& .react-datepicker__day-name': {
    color: '#B4B4B4',
    textTransform: 'uppercase',
    fontFamily: 15,
    fontWeight: 600,
    height: theme.spacing(23),
    width: theme.spacing(23),
    margin: 0,
    paddingTop: theme.spacing(5)
  },
  '& .react-datepicker__day-names': {
    margin: 0,
  },
  '& .react-datepicker__day--outside-month': {
    visibility: 'hidden'
  },
  '& .react-datepicker__day': {
    color: '#FFFFFF',
    margin: 0,
    borderRadius: 0,
    width: theme.spacing(23),
    padding: `${theme.spacing(5)} 0`,
    '&:hover': {
      background: '#383838',
      borderRadius: 0,
    }
  },
  '& .react-datepicker__day--range-start': {
    background: '#2E7AD3!important',
    borderRadius: `${theme.spacing(25)} 0 0 ${theme.spacing(25)}!important`,
  },
  '& .react-datepicker__day--selecting-range-start': {
    background: '#2E7AD3!important',
    borderRadius: `${theme.spacing(25)} 0 0 ${theme.spacing(25)}!important`,
  },
  '& .react-datepicker__day--range-end': {
    background: '#2E7AD3!important',
    borderRadius: `0 ${theme.spacing(25)} ${theme.spacing(25)} 0!important`,
  },
  '& .react-datepicker__day--selecting-range-end': {
    background: '#2E7AD3!important',
    borderRadius: `0 ${theme.spacing(25)} ${theme.spacing(25)} 0!important`,
  },
  '& .react-datepicker__day--in-range': {
    background: '#383838',
  }
}));

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
    <Wrapper>
      <Button
        component="label"
        variant="contained"
        tabIndex={-1}
        startIcon={<DateRangeIcon />}
        onClick={() => setOpen(prev => !prev)}
      >
        <Box sx={{ fontSize: 18 }}>{currentPeriod}</Box>
      </Button>
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
    </Wrapper>
  );
};

export default Picker;