import React, { useState } from 'react';
import Picker from "./components/DatePicker";
import ChartLine from "./components/Chart";
import QuestionsContainer from "./components/Questions/Container";
import { Questions } from "./config/types";
import { LIST_MOCK } from "./config/Mocks";


const App = () => {

  const [data, setData] = useState<Questions[]>(LIST_MOCK);
  const [chartQuestions, setChartQuestions] = useState<Questions[]>([]);

  const handleSelectChart = (item: Questions) => {
    setChartQuestions((prev) => {
      if (prev.some((val) => val.id === item.id)) {
        return prev.filter((val) => val.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
   <>
     <header className="header">
       <h4>Ребус</h4>
     </header>
     <main className="main">
       <Picker/>
       <ChartLine questions={chartQuestions}/>
       <QuestionsContainer
         list={data}
         onChange={setData}
         questionsChart={chartQuestions}
         onSelectChart={handleSelectChart}
       />
     </main>
   </>
  );
}

export default App;
