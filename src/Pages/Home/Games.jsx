import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Games() {
  const navigate = useNavigate();

  // Function to navigate back to home
  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <div className="portfolio">
        <header>
          <h1>My Portfolio</h1>
        </header>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a passionate developer with a keen interest in creating innovative solutions.</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of Project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2</p>
          </div>
          {/* Add more project sections as needed */}
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
        <footer>
          <p>&copy; 2024 My Portfolio</p>
        </footer>
      </div>
    </div>
  );
}

export default Games;


