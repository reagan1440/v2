import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyPortfolio() {
  let navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigateToGames = () => {
    navigate('/games');
  };

  const navigateToContactMe = () => {
    navigate('/contact-me');
  };

  const divStyle = {
    backgroundImage: 'url("./img/yellownotebg.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: '10px',
  };
  
  const buttonStyle = {
    cursor: 'pointer',
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: '580px',
    left: '350px',
  };

  const contactButtonStyle = {
    cursor: 'pointer',
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: '400px',
    left: '320px', // Adjust placement as needed
    left: windowWidth > 768 ? '320px' : '50%', // Adjusts based on screen width
    transform: windowWidth > 768 ? 'translateX(0)' : 'translateX(-500%)',
  };


  const imageContainerStyle = {
    position: 'absolute',
    bottom: '50px',
    left: '20px',
  };

  const imageContainerStyle2 = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '160px',
    height: '160px',
  };

  const imageStyle1 = {
    width: '60px',
    height: 'auto',
    marginBottom: '35px',
    marginLeft: '10px',
  };

  const imageStyle2 = {
    width: '60px',
    height: 'auto',
    marginTop: '-20px',
    marginLeft: '160px',
  };

  const imageStyle4 = {
    width: '60px',
    height: 'auto',
    marginTop: '-30px',
    marginLeft: '160px'
  };

  const errorStyle = {
    width: '480px',
    marginTop: '-50px',
    marginLeft: '-20px',
  }
   const  imageStyle5 = {
    width: '60px',
    height: 'auto',
    marginLeft: '70px',
    marginTop: '10px',
   }

   const imageStyle6 = {
    width: '60px',
    height: 'auto',
    marginTop: '20px',
    marginLeft: '10px',
   }

  const images = [
    {
      src: './img/trash icon.png',
      alt: 'Image 1',
      style: imageStyle1,
    },
    {
      src: './img/note icon.png',
      alt: 'Image 2',
      style: imageStyle2,
    },
    {
      src: './img/globe icon.png',
      alt: 'Image 3',
      style: imageStyle5,
    },
    {
      src: './img/computer icon.png',
      alt: 'Image 4',
      style: imageStyle6,
    },
    {
      src: './img/5ceb85ff937c7fcef5dabf6168f1b7ec-removebg-preview.png',
      alt: 'Image 5',
      style: imageStyle4,
    },
    {
      src: './img/error-removebg-preview.png',
      alt: 'Error',
      style: errorStyle,
      width: '120px',
      height: 'auto',
    },
  ];

  return (
    <div style={divStyle}>
      {/* Image acting as a button */}
      <img
        src="./img/skiliify-code-removebg-preview.png"
        alt="Contact-ButtonBoring"
        onClick={navigateToGames}
        style={buttonStyle}
      />
  

      {/* New button for contact */}
      <img
        src="./img/v.1-code-removebg-preview.png"
        alt="Contact-Button"
        onClick={navigateToContactMe}
        style={contactButtonStyle}
      />

      {/* Image container for existing images */}
      <div style={imageContainerStyle}>
        {/* Render existing images */}
        {images.slice(0, 5).map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={image.style}
            />
          </div>
        ))}
      </div>

      {/* Image container for new images */}
      <div style={imageContainerStyle2}>
        {/* Render new images */}
        {images.slice(5).map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={image.style}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPortfolio;


