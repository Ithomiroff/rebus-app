import React, { useState } from 'react';
import Picker from "./components/DatePicker";
import ChartLine from "./components/Chart";
import QuestionsContainer from "./components/Questions/Container";
import { Questions } from "./config/types";
import { LIST_MOCK } from "./config/Mocks";

const App = () => {

  const [data, setData] = useState<Questions[]>(LIST_MOCK);

  return (
   <>
     <header className="header">
       <h4>Ребус</h4>
     </header>
     <main className="main">
       <Picker/>
       <ChartLine/>
       <QuestionsContainer
         list={data}
       />
     </main>
   </>
  );
}

export default App;
