import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function AboutMe() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="app">
      <div className="sidebar">
        <img
          className="logo"
          src="https://www.scdn.co/i/_global/twitter_card-default.jpg"
          alt="Spotify Logo"
        />
           <button className="back-button" onClick={() => navigate('/')}>
          <img src="./img/Screenshot__58_-removebg-preview.png" alt="Back" />
        </button>
    <ul className="menu">
  <li className="menu-item active">
  <Link to="/contact-me">
            <img src="./img/Screenshot__54_-removebg-preview.png" alt="Home" className="menu-icon" />
            Home
          </Link>
  </li>
  <li className="menu-item">
    <a href="/about-me">
      <img src="./img/search icon.png" alt="Search" className="menu-icon" />
      Search
    </a>
  </li>

  <li className="menu-item">
  <Link to="/my-songs">
    <img src="./img/library icon.png" alt="Your Library" className="menu-icon" />
    Reagans Library
  </Link>
</li>
  <li className="menu-item">
    <a>
      <img src="./img/new icon.png" alt="Add Playlist" className="menu-icon" />
      Add Playlist
    </a>
  </li>
  <li className="menu-item">
    <a>
      <img src="./img/likedsongs.jpg" alt="Liked Songs" className="menu-icon" />
      Liked Songs
    </a>
  </li>
  <li className="menu-item">
    <a>
      <img src="./img/Screenshot (55).png" alt="Genres" className="menu-icon" />
      Saved Episodes
    </a>
  </li>
  <div> 
  <ul className="navplay-container">
  <li className="nav-playlistbtn">
            
            <p className='nav-play'>Playlists</p>
            
      
        </li>
            <li className="nav-playlistbtn">
            
                <p className='nav-play'>Podcasts</p>
                
          
            </li>
          </ul>
  </div>
</ul>
<div>
          <ul className="p-item">
  <li className="p-item-item">
    <a>
      <img src="./img/tech spot.png" alt="Genres" className="pod-item" />
      📌 Technology Podcast
    </a>
  </li> 
  <li className="p-item-item">
    <a>
      <img src="./img/daylist.png" alt="Genres" className="pod-item" />
      📌Daylist
    </a>
  </li>
  <li className="p-item-item">
    <a>
      <img src="/img/discover spot.jpeg" alt="Genres" className="pod-item" />
      Discover Weekly
    </a>
  </li>
  <li className="p-item-item">
    <a>
      <img src="./img/spotify repeat.png" alt="Genres" className="pod-item" />
      On Repeat
    </a>
  </li>
  <li className="p-item-item">
    <a>
      <img src="./img/spotify this.jpg" alt="Genres" className="pod-item" />
      Spotify Discover This
    </a>
  </li>
</ul>
</div>

      </div>
      <div className="main">
        <div className="header">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="content">
          <h2 className='section-title'> My Projects </h2>
<div class="card-container">
  <a href="https://roomeo-54bd0cc57e2b.herokuapp.com/" class="card">
    <section id="card2" class="card-content">
      <img src="./img/roomeo spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>

<div class="card-container">
  <a href="https://stark-coast-30123-1fdb6d955941.herokuapp.com/" class="card">
    <section id="card1" class="card-content">
      <img src="./img/sidebar.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://echoes-of-astra.onrender.com/dreamInterpretation" class="card">
    <section id="card2" class="card-content">
      <img src="./img/astra spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://dannysaravia001.github.io/Cryptos-and-Comics/" class="card">
    <section id="card2" class="card-content">
      <img src="./img/crypto spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://reagan1440.github.io/weather-search/" class="card">
    <section id="card2" class="card-content">
      <img src="./img/weather spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://jate-text-editor-f9ma.onrender.com/" class="card">
    <section id="card2" class="card-content">
      <img src="./img/jate spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://reagan1440.github.io/birthday-cake/" class="card">
    <section id="card2" class="card-content">
      <img src="./img/birthday spot.png" alt="Description of the image" height="250" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://reagan1440.github.io/password-generator/" class="card">
    <section id="card2" class="card-content">
      <img src="./img/pass spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://github.com/reagan1440/ORM-E_Commerce?tab=readme-ov-file" class="card">
    <section id="card2" class="card-content">
      <img src="./img/e spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://reagansprofessional-note-taker-9e9db5e2619c.herokuapp.com/" class="card">
    <section id="card2" class="card-content">
      <img src="./img/note spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://github.com/reagan1440/reagans-svg-logo-maker" class="card">
    <section id="card2" class="card-content">
      <img src="./img/logo spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="card-container">
  <a href="https://github.com/reagan1440/learning-about-regex/blob/main/Develop/gist-template.md" class="card">
    <section id="card2" class="card-content">
      <img src="./img/doc spot.png" alt="Description of the image" height="255" width="300"/>
    </section>
  </a>
</div>
<div class="random-class-1">
  <ul class='random-class-2'>
    <li class='random-class-3'>
    <h3 class='random-class-40'>Now Playing</h3>
      <img className='dev-cut' src="./img/rea spot.png" alt="Image Description"/>
      <h3 class='random-class-4'>Developers Cut</h3>
      <p class='random-class-5'>Software engineer</p>
      <img src="./img/Screenshot__63_-removebg-preview.png" alt="Image Description"/>
    </li>

  </ul>
</div>



          
          </div>
        </div>
      </div>
  );
}

export default AboutMe;

