import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useState } from "react";
import { styled, Typography } from "@mui/material";

const Item = styled(ListItem)({
  '& .chart-icon': {
    visibility: 'hidden',
  },
  '&:hover': {
    '& .chart-icon': {
      visibility: 'visible',
    }
  }
});

const QuestionsList = () => {

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', padding: '0!important' }}>
      {new Array(20).fill(1).map((value) => {
        return (
          <Item
            // @ts-ignore
            button
            sx={{ height: '52px', borderRadius: 5, paddingLeft: 5 }}
            key={value}
            disablePadding
            secondaryAction={
              <Typography variant="body1">
                221
              </Typography>
            }
          >
            <ListItemIcon className="chart-icon" sx={{ minWidth: 'unset', marginRight: 4 }}>
              <IconButton size="small">
                <TimelineIcon fontSize="small" />
              </IconButton>
            </ListItemIcon>
            <ListItemIcon sx={{ minWidth: 'unset', marginRight: 4 }}>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
              />
            </ListItemIcon>
            <ListItemText
              sx={{
                fontSize: '19px',
                margin: 0,
                textDecoration: 'underline',
                textDecorationStyle: 'dotted',
                textUnderlineOffset: 4,
                cursor: 'pointer'
            }}
              primary="Когда доставят заказ?"
            />
          </Item>
        );
      })}
    </List>
  );
};

export default QuestionsList;
