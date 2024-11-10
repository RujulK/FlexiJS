import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  useEffect(() => {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.classList.add('snowflakes');
    document.body.appendChild(snowflakesContainer);

    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.textContent = '❄';
      snowflakesContainer.appendChild(snowflake);

      const size = Math.random() * 10 + 5;
      const leftPosition = Math.random() * window.innerWidth;
      snowflake.style.fontSize = `${size}px`;
      snowflake.style.left = `${leftPosition}px`;

      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;

      setTimeout(() => {
        snowflake.remove();
      }, 10000);
    };

    const snowflakeInterval = setInterval(createSnowflake, 200);

    return () => clearInterval(snowflakeInterval);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
