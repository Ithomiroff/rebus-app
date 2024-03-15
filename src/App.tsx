import React from 'react';
import Picker from "./components/DatePicker";
import ChartLine from "./components/Chart";

const App = () => {
  return (
   <>
     <header className="header">
       <h4>Ребус</h4>
     </header>
     <main className="main">
       <Picker/>
       <ChartLine/>
     </main>
   </>
  );
}

export default App;
