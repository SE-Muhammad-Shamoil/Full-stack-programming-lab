import React from 'react';
import StudentCard from './components/StudentCard';
import './App.css';

const students = [
  {
    name: "Shamoil",
    rollNo: "232025",
    department: "SE",
    university: "AU",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    name: "Laiba",
    rollNo: "232026",
    department: "BBA",
    university: "NU",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    name: "Hamza",
    rollNo: "232027",
    department: "CE",
    university: "NUST",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Student Information Cards</h1>
        <p className="app-subtitle">Lab 05 — Task 01 • React Props</p>
      </header>
      <main className="cards-container">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            rollNo={student.rollNo}
            department={student.department}
            university={student.university}
            color={student.color}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
