import React from 'react';
import './StudentCard.css';

const StudentCard = ({ name, rollNo, department, university, color }) => {
  return (
    <div className="student-card" style={{ background: color }}>
      <div className="card-avatar">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="card-info">
        <h2 className="student-name">{name}</h2>
        <div className="info-row">
          <span className="label">Roll No</span>
          <span className="value">{rollNo}</span>
        </div>
        <div className="info-row">
          <span className="label">Department</span>
          <span className="value">{department}</span>
        </div>
        <div className="info-row">
          <span className="label">University</span>
          <span className="value">{university}</span>
        </div>
      </div>
      <div className="card-badge">Student</div>
    </div>
  );
};

export default StudentCard;
