import React, { useState } from 'react';

function HeroSection() {


  return (
    <section id="heroSection" className="hero--section">
      <div className="youtube--main">
        <img src="./img/Editors cut.png" alt="Background" />
        <div className='hero--video'>
        <img src="./img/reallygreatsite2-ezgif.com-video-to-gif-converter.gif" alt="Background" className="hero--gif" />
        </div>
      </div>

      <div className="hero--section--img">
        <div className="portfolio-container">
          <div className="hero--section--img">
            <div className="image-link">
              <img src="./img/AI dream Interpretor.png" alt="Background" className="ai-image" />
            </div>
            <div className="image-link">
              <a href="https://dannysaravia001.github.io/Cryptos-and-Comics/">
                <img src="./img/Screenshot (49).png" alt="Second Image" className="second-image" />
              </a>
            </div>
            <div className="image-link">
              <a href="https://echoes-of-astra.onrender.com/dreamInterpretation">
                <img src="./img/Screenshot (50).png" alt="Third Image" className="third-image" />
              </a>
            </div>
            <div className="image-link">
              <a href="https://roomeo-54bd0cc57e2b.herokuapp.com/">
                <img src="./img/Screenshot (25).png" alt="Fourth Image" className="fourth-image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    

      {/* Conditional rendering of Spotify iframe */}
      {/* {!isMuted && (
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/1rPYEWQfIRo5A4fvLgFbBe?utm_source=generator"
          width="250"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )} */}
    </section>
  );
}

export default HeroSection;

