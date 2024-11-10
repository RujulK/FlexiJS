import React from 'react';
import './About.css';

const About = ({ visible }) => {
  return (
    <div className={`section about ${visible ? 'animate' : ''}`} id="about">
      <h2>Stuff About Me</h2>
      <p>
        I'm really passionate about robotics, which is why
        after my Mechatronics diploma, I came to do CS so that
        I can focus more the coding side of robotics, and explore
        CS overall.
      </p>
    </div>
  );
};

export default About;
