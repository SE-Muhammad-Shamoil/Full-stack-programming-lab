import React from 'react';
import CourseItem from './components/CourseItem';
import './App.css';

const courses = [
  {
    courseName: "Full Stack Web Development",
    instructor: "Dr. Ahmad Hassan",
    duration: "12 Weeks",
    courseType: "Online",
  },
  {
    courseName: "Data Structures & Algorithms",
    instructor: "Prof. Sana Mirza",
    duration: "8 Weeks",
    courseType: "Offline",
  },
  {
    courseName: "Machine Learning Fundamentals",
    instructor: "Dr. Bilal Khan",
    duration: "10 Weeks",
    courseType: "Online",
  },
  {
    courseName: "Database Management Systems",
    instructor: "Ms. Ayesha Noor",
    duration: "6 Weeks",
    courseType: "Offline",
  },
  {
    courseName: "Cloud Computing & DevOps",
    instructor: "Mr. Zaid Rehman",
    duration: "9 Weeks",
    courseType: "Online",
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Course List</h1>
        <p className="app-subtitle">Lab 05 — Task 02 • React Props & .map()</p>
        <div className="legend">
          <span className="legend-item online">🌐 Online</span>
          <span className="legend-item offline">🏫 Offline</span>
        </div>
      </header>
      <main className="courses-grid">
        {courses.map((course, index) => (
          <CourseItem
            key={index}
            courseName={course.courseName}
            instructor={course.instructor}
            duration={course.duration}
            courseType={course.courseType}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
