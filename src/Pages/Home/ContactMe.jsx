import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SpotifyUI() {
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
    <a href="/">
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
    <a href="/">
      <img src="./img/new icon.png" alt="Add Playlist" className="menu-icon" />
      Add Playlist
    </a>
  </li>
  <li className="menu-item">
    <a href="/">
      <img src="./img/likedsongs.jpg" alt="Liked Songs" className="menu-icon" />
      Liked Songs
    </a>
  </li>
  <li className="menu-item">
    <a href="/">
      <img src="./img/Screenshot (55).png" alt="Genres" className="menu-icon" />
      Saved Episodes
    </a>
  </li>
</ul>

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
          <div className="playlist-container">
            <h2 className="section-title">Featured Skills</h2>
            <div className="playlist-items featured-skills">
              {/* Playlist items */}
              <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="./img/React_black_logo.png"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">React</p>
                  <p className="playlist-item-description">A JavaScript library for building user interfaces</p>
                </div>
              </div>
              <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="./img/mysql2.png"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">MySQL</p>
                  <p className="playlist-item-description">An open-source relational database management system</p>
                </div>
              </div>
              <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="./img/angular.png"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">Angular</p>
                  <p className="playlist-item-description">TypeScript based application framework</p>
                </div>
              </div>
              <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="./img/vuejs.png"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">Vue.js</p>
                  <p className="playlist-item-description">Progressive UI framework, open source model-view-viewmodel</p>
                </div>
              </div>
              <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="./img/mongo.png"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">MongoDB</p>
                  <p className="playlist-item-description">source-available, cross-platform, document-oriented database program</p>
                </div>
              </div>
                  <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="./img/api spot.png"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">API</p>
                  <p className="playlist-item-description">creation of applications that access the features or data of an operating system, application, or other service.</p>
                </div>
              </div>
            </div>
            <h2 className="section-title">Other Skills</h2>
<div className="playlist-items">
  <div className="other-skills-container">
    <div className="playlist-item other-skills-item">
      <div className="other-skills-item-container">
        <div className="playlist-item-image-other-skills-item-img">
          <img
            src="./img/node spot.png"
            alt="Playlist"
          />
        </div>
        <div className="playlist-item-details">
          <p className="playlist-item-name">Node.js</p>
        </div>
      </div>
    </div>
    <div className="playlist-item other-skills-item">
      <div className="other-skills-item-container">
        <div className="playlist-item-image-other-skills-item-img">
          <img
            src="./img/css spot.png"
            alt="Playlist"
          />
        </div>
        <div className="playlist-item-details">
          <p className="playlist-item-name">CSS</p>
        </div>
      </div>
    </div>
    <div className="playlist-item other-skills-item">
      <div className="other-skills-item-container">
        <div className="playlist-item-image-other-skills-item-img">
          <img
            src="./img/html spot.png"
            alt="Playlist"
          />
        </div>
        <div className="playlist-item-details">
          <p className="playlist-item-name">HTML</p>
        </div>
      </div>
    </div>
    <div className="playlist-item other-skills-item">
      <div className="other-skills-item-container">
        <div className="playlist-item-image-other-skills-item-img">
          <img
            src="./img/bootstrap spot.png"
            alt="Playlist"
          />
        </div>
        <div className="playlist-item-details">
          <p className="playlist-item-name">BootStrap</p>
        </div>
      </div>
    </div>
  </div>
</div>

            <h2 className="section-title">Recommended</h2>
            <div className="recommended-section">
              {/* Recommended items */}
              <div className="recommended-item">
                <p>Recommended 1</p>
              </div>
              <div className="recommended-item">
                <p>Recommended 2</p>
              </div>
              <div className="recommended-item">
                <p>Recommended 3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="player-bar">
          {/* Spotify player bar with play button and other components */}
        </div>
      </div>
    </div>
  );
}

export default SpotifyUI;
