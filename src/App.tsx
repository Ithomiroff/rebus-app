import React from 'react';
import { AppBar, Box, Container, Stack } from "@mui/material";
import QuestionsContainer from "./components/Questions/Container";
import Chart from "./components/Chart";
import DatePicker from "./components/DatePicker";

const App = () => {
  return (
    <Stack>
      <AppBar position="static">
        <Box sx={{ fontSize: 25, fontWeight: 700 }}>Ребус</Box>
      </AppBar>
      <Box>
        <Container>
          <Stack>
            <DatePicker />
            <Chart />
            <QuestionsContainer />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default App;
