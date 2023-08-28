import React, { useState,useEffect } from 'react';
import './App.css';
import Card from './Card'


function App() {
  // const exercise = "Push-up"; // Replace with your exercise name
  // const weight = 50; // Replace with your weight value
  // const type = "Strength"; // Replace with your type
  // const reps = 10; // Replace with your reps value

  const [datas,setDatas] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:5173/getUserData", {
      method: "GET",
    });
    const data = await response.json();
    setDatas(data);
    }

    useEffect(() => {
      getData();
    }, []); 

  return (
    <div className="App">
      {datas.map(({
        _id,
        exercise,
        weight,
        type,
        reps,
      })=>(
        <Card
        key={_id}
        exercise={exercise}
        weight={weight}
        type={type}
        reps={reps}
        />
      )
      )}
    </div>
  );
}

export default App;
