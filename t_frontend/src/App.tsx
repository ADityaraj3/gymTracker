import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'


function App() {
  const exercise = "Push-up"; // Replace with your exercise name
  const weight = 50; // Replace with your weight value
  const type = "Strength"; // Replace with your type
  const reps = 10; // Replace with your reps value

  return (
    <div className="App">
      <Card
      exercise={exercise}
      weight={weight}
      type={type}
      reps={reps}/>
    </div>
  );
}

export default App;
