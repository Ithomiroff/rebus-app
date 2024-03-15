import { Box, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimelineIcon from "@mui/icons-material/Timeline";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
const QuestionsActionsPanel = () => {

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'max-content'
    }}>
      <Box sx={{
        backgroundColor: '#252525',
        borderRadius: 12,
        padding: 7.5,
        display: 'flex',
        gap: 7.5,
      }}>
        <Button variant="contained" startIcon={<VisibilityIcon />}>
          Скрыть
        </Button>
        <Button variant="contained" startIcon={<VisibilityOffIcon />}>
          Показать
        </Button>
        <Button variant="contained" startIcon={<ContentCopyIcon />}>
          Объединить
        </Button>
        <Button variant="contained" startIcon={<LocalOfferIcon />}>
          Добавить метку
        </Button>
        <Button
          sx={{ backgroudColor: 'error.main' }}
          variant="contained" startIcon={<DeleteIcon />}>
          Удалить метку
        </Button>
        <IconButton>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  )
};

export default QuestionsActionsPanel;