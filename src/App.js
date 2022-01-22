import React from 'react';
import './App.css';
import Dinner from './Dinner'

function App() {
  return (
    <div className="App">
      <Dinner  dishName="Chicken Qorma" sweetDish="Jaleebi" />
      <hr/>
      <Dinner  dishName="Chicken Boryani" sweetDish="Kheer" />

    </div>
  );
}

export default App;
