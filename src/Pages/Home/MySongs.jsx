import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function MySongs() {
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
    <a href="/">
      <img src="./img/tech spot.png" alt="Genres" className="pod-item" />
      📌 Technology Podcast
    </a>
  </li> 
  <li className="p-item-item">
    <a href="/">
      <img src="./img/daylist.png" alt="Genres" className="pod-item" />
      📌Daylist
    </a>
  </li>
  <li className="p-item-item">
    <a href="/">
      <img src="/img/discover spot.jpeg" alt="Genres" className="pod-item" />
      Discover Weekly
    </a>
  </li>
  <li className="p-item-item">
    <a href="/">
      <img src="./img/spotify repeat.png" alt="Genres" className="pod-item" />
      On Repeat
    </a>
  </li>
  <li className="p-item-item">
    <a href="/">
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
          <h2 className='section-title'> A few of my personal favorites! </h2>
          <div className="iframe-container">
          <iframe style={{borderRadius: '12px'}}
               src="https://open.spotify.com/embed/track/2p8IJfP7f5A2FF9uR8hlss?utm_source=generator" 
               width="100%" 
               height="352" 
               frameBorder="0" 
               allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
           <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/3EytfC22ikoXM921cJbejn?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          <iframe style={{borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/1CB7zANKq4TYkOg7XCdw5v?utm_source=generator"
           width="100%" 
           height="352"
            frameBorder="0"
             allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
              </iframe>
              <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/2qpacEyFxmbxCpIEqZkqvC?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
              <iframe style={{ borderRadius: '12px'}}
               src="https://open.spotify.com/embed/track/2IWtloZYQDcP8Ashwx8QEF?utm_source=generator" 
               width="100%" 
               height="352" 
               frameBorder="0" 
               allowfullscreen="" 
               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
               loading="lazy">
              </iframe>
              <iframe style={{borderRadius:'12px'}}
               src="https://open.spotify.com/embed/track/2gpkmR9oX3Jk6rDI6KUwHj?utm_source=generator"
                width="100%"
                 height="352"
                  frameBorder="0"
                   allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     loading="lazy">
              </iframe>
              <iframe style={{borderRadius:'12px'}}
               src="https://open.spotify.com/embed/track/4sebUbjqbcgDSwG6PbSGI0?utm_source=generator"
                width="100%"
                 height="352"
                  frameBorder="0"
                   allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     loading="lazy">
              </iframe>
              <iframe style={{borderRadius:'12px'}}
               src="https://open.spotify.com/embed/track/3a6PN6BRB8PP3ms48s7kU1?utm_source=generator" 
                width="100%"
                 height="352"
                  frameBorder="0"
                   allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                     loading="lazy">
              </iframe>
              <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/3tYxhPqkioZEV5el3DJxLQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/1QUXSToImDkW7CUzJwRrWQ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/7ybWwXX8VFDhbGsbWvB26M?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/track/6tWHb2caC8Kuc5oBO8dHmc?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySongs;

