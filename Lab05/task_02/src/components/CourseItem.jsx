import React from 'react';
import './CourseItem.css';

const CourseItem = ({ courseName, instructor, duration, courseType }) => {
  const isOnline = courseType === 'Online';

  return (
    <div className={`course-item ${isOnline ? 'online' : 'offline'}`}>
      <div className="course-header">
        <span className={`badge ${isOnline ? 'badge-online' : 'badge-offline'}`}>
          {isOnline ? '🌐 Online' : '🏫 Offline'}
        </span>
        <span className="course-duration">⏱ {duration}</span>
      </div>
      <h3 className="course-name">{courseName}</h3>
      <div className="course-instructor">
        <div className="instructor-avatar">{instructor.charAt(0)}</div>
        <span>{instructor}</span>
      </div>
      <div className="course-footer">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
    </div>
  );
};

export default CourseItem;
