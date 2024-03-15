import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const QuestionsFilter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        endIcon={<KeyboardArrowDownIcon/>}
        onClick={handleClick}
      >
        Все вопросы (833)
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Все вопросы (833)"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Без метки (790)"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Маркетинг (109)"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Логисты (30)"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox />}
            label="Колл-центр (3)"
          />
        </MenuItem>
      </Menu>
    </div>
  )
};


export default QuestionsFilter;