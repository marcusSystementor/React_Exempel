import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import FetchData from './FetchData';


const App = () => {

const names = ["Måndag", "Tisdag", "Onsdag, Torsdag", "Fredag"];

  return (

   <div className="App">
    {names.map((arr) => (
      <h3 key={arr.id}>{arr}</h3>
    ))}
  <FetchData />
    </div>
  );
};

export default App;
