import React from 'react';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="main-content">
        <div className="video">
          {/* Your main video component */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Main Video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="images">
          <div className="image">
            <Link to="/link1"><img src="/path/to/image1.jpg" alt="Image 1" /></Link>
          </div>
          <div className="image">
            <Link to="/link2"><img src="/path/to/image2.jpg" alt="Image 2" /></Link>
          </div>
          {/* Add more image components here */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

