import React from 'react';
import Picker from "./components/DatePicker";
import ChartLine from "./components/Chart";
import QuestionsContainer from "./components/Questions/Container";

const App = () => {
  return (
   <>
     <header className="header">
       <h4>Ребус</h4>
     </header>
     <main className="main">
       <Picker/>
       <ChartLine/>
       <QuestionsContainer/>
     </main>
   </>
  );
}

export default App;
