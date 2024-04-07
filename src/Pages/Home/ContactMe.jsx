import React from 'react';

function SpotifyUI() {
  return (
    <div className="app">
      <div className="sidebar">
        <img
          className="logo"
          src="https://www.scdn.co/i/_global/twitter_card-default.jpg"
          alt="Spotify Logo"
        />
        <ul className="menu">
          <li className="menu-item active">
            <a href="/">Home</a>
          </li>
          <li className="menu-item">
            <a href="/">Search</a>
          </li>
          <li className="menu-item">
            <a href="/">Your Library</a>
          </li>
          <li className="menu-item">
            <a href="/">Add Playlist</a>
          </li>
          <li className="menu-item">
            <a href="/">Liked Songs</a>
          </li>
          <li className="menu-item">
            <a href="/">Genres</a>
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
            <h2>Featured Playlists</h2>
            <div className="playlist-items">
              {/* Playlist items */}
              <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">Playlist 1</p>
                  <p className="playlist-item-description">Description of Playlist 1</p>
                </div>
              </div>
              <div className="playlist-item">
                <div className="playlist-item-image">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Playlist"
                  />
                </div>
                <div className="playlist-item-details">
                  <p className="playlist-item-name">Playlist 2</p>
                  <p className="playlist-item-description">Description of Playlist 2</p>
                </div>
              </div>
              {/* Add more playlist items */}
            </div>
          </div>
          {/* Add more content sections */}
        </div>
      </div>
    </div>
  );
}

export default SpotifyUI;


