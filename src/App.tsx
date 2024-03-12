import React from 'react';
import { Box, Container, Stack } from "@mui/material";
import QuestionsContainer from "./components/Questions/Container";
import Chart from "./components/Chart";
import DatePicker from "./components/DatePicker";

const App = () => {
  return (
    <Stack>
      <header>
        <Container>
          <h1>Ребус</h1>
        </Container>
      </header>
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
