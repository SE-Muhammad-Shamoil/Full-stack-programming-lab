import React from 'react';
import Greeting from './components/Greeting';
import './App.css';

const greetings = [
  {
    name: "Shamoil",
    timeOfDay: "Morning",
    bgColor: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
  },
  {
    name: "Laiba",
    timeOfDay: "Afternoon",
    bgColor: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  },
  {
    name: "Hamza",
    timeOfDay: "Evening",
    bgColor: "linear-gradient(135deg, #2c3e7a 0%, #085078 100%)",
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Dynamic Greeting App</h1>
        <p className="app-subtitle">Lab 05 — Task 03 • Conditional Rendering</p>
      </header>
      <main className="greetings-container">
        {greetings.map((item, index) => (
          <Greeting
            key={index}
            name={item.name}
            timeOfDay={item.timeOfDay}
            bgColor={item.bgColor}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
