import { Box, TextField } from "@mui/material";
import QuestionsList from "../List";

const QuestionsContainer = () => {
  return (
    <Box sx={{ paddingTop: 32, width: 860, margin: '0 auto' }}>
      <TextField
        fullWidth
        label="Поиск" variant="outlined" />

      <Box sx={{ paddingTop: '54px' }}>
        <QuestionsList />
      </Box>
    </Box>
  );
};

export default QuestionsContainer;