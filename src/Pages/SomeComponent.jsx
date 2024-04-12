import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SomeComponent() {
  let navigate = useNavigate();

  const goToAboutMe = () => {
    navigate('/about-me');
  };

  const goToMySongs = () => {
    navigate('/my-songs');
  };

  const goToReagan = () => {
    navigate('/reagan');
  }

  return (
    <div>
      {/* Content of your component */}
      <button onClick={goToAboutMe}>Back to About Me</button>
      <button onClick={goToMySongs}>Go to My Songs</button>
      <button onClick={goToReagan}>Go to Reagan </button>
    </div>
  );
}
