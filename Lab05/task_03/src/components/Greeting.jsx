import React from 'react';
import './Greeting.css';

const greetingConfig = {
  Morning:   { emoji: '🌅', message: 'Good Morning', subtext: 'Hope you have a productive day ahead!' },
  Afternoon: { emoji: '☀️',  message: 'Good Afternoon', subtext: 'Keep up the great work today!' },
  Evening:   { emoji: '🌙', message: 'Good Evening', subtext: 'Time to relax and unwind!' },
};

const Greeting = ({ name, timeOfDay, bgColor }) => {
  const config = greetingConfig[timeOfDay] || greetingConfig.Morning;

  return (
    <div className="greeting-card" style={{ background: bgColor }}>
      <div className="greeting-emoji">{config.emoji}</div>
      <h2 className="greeting-message">
        {config.message}, <span className="greeting-name">{name}!</span>
      </h2>
      <p className="greeting-subtext">{config.subtext}</p>
      <div className="greeting-time-badge">{timeOfDay}</div>
    </div>
  );
};

export default Greeting;
