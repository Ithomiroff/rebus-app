import { Box, TextField } from "@mui/material";
import QuestionsList from "../List";
import QuestionsActionsPanel from "../ActionsPanel";
import QuestionsFilter from "../Filter";

const QuestionsContainer = () => {
  return (
    <>
      <Box sx={{ paddingTop: 32, paddingBottom: 43, width: 860, margin: '0 auto' }}>
        <TextField
          fullWidth
          label="Поиск" variant="outlined" />

        <Box sx={{ paddingTop: '54px' }}>
          <QuestionsFilter />
          <QuestionsList />
        </Box>
      </Box>
      <QuestionsActionsPanel/>
    </>
  );
};

export default QuestionsContainer;