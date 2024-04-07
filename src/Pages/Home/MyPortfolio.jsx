import React from 'react';
import { useNavigate } from 'react-router-dom';

function MyPortfolio() {
  let navigate = useNavigate();

  const navigateToAboutMe = () => {
    navigate('/about-me');
  };

  const navigateToContactMe = () => {
    navigate('/contact-me');
  };

  const divStyle = {
    backgroundImage: 'url("./img/Welcome to (3).png")',
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
    width: '50px',
    height: '50px',
    position: 'absolute',
    top: '180px',
    right: '500px',
  };

  const contactButtonStyle = {
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    position: 'absolute',
    top: '350px',
    right: '80px', // Adjust placement as needed
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
    width: '50px',
    height: 'auto',
    marginBottom: '15px',
  };

  const imageStyle2 = {
    width: '320px',
    height: 'auto',
    marginTop: '-20px',
  };

  const images = [
    {
      src: './img/trash icon.png',
      alt: 'Image 1',
      style: imageStyle1,
    },
    {
      src: './img/note icon.png',
      alt: 'Image 2',
      style: imageStyle1,
    },
    {
      src: './img/globe icon.png',
      alt: 'Image 3',
      style: imageStyle1,
    },
    {
      src: './img/computer icon.png',
      alt: 'Image 4',
      style: imageStyle1,
    },
    {
      src: './img/5ceb85ff937c7fcef5dabf6168f1b7ec-removebg-preview.png',
      alt: 'Image 5',
      style: imageStyle1,
    },
    {
      src: './img/error-removebg-preview.png',
      alt: 'Error',
      style: imageStyle2,
      width: '120px',
      height: 'auto',
    },
  ];

  return (
    <div style={divStyle}>
      {/* Image acting as a button */}
      <img
        src="./img/desktop folder.png"
        alt="Button"
        onClick={navigateToAboutMe}
        style={buttonStyle}
      />

      {/* New button for contact */}
      <img
        src="./img/desktop folder.png"
        alt="Contact Button"
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


