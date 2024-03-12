import { Box, Button } from "@mui/material";
import DateRangeIcon from '@mui/icons-material/DateRange';
import React from "react";

type Props = {
  start: Date | null;
  end: Date | null;
};

const DateButton = ({ start, end }: Props) => {
  return (
    <Button
      component="label"
      variant="contained"
      tabIndex={-1}
      startIcon={<DateRangeIcon />}
    >
      <Box sx={{ fontSize: 18 }}>31/01/2024 — 14/02/2024</Box>
    </Button>
  )
};

export default DateButton;