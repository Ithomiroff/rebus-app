import React from 'react';
import { AppBar, Box, Container, Stack } from "@mui/material";
import QuestionsContainer from "./components/Questions/Container";
import ChartLine from "./components/Chart";
import Picker from "./components/DatePicker";

const App = () => {
  return (
    <Stack>
      <AppBar position="static">
        <Box sx={{ fontSize: 25, fontWeight: 700 }}>Ребус</Box>
      </AppBar>
      <Box sx={{ marginTop: 20 }}>
        <Container>
          <Stack>
            <Picker />
            <ChartLine />
            <QuestionsContainer />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default App;
