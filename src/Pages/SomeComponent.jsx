import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SomeComponent() {
  let navigate = useNavigate();

  const goBackToAboutMe = () => {
    navigate('/about-me');
  };

  const goToMySongs = () => {
    navigate('/my-songs');
  };

  return (
    <div>
      {/* Content of your component */}
      <button onClick={goBackToAboutMe}>Back to About Me</button>
      <button onClick={goToMySongs}>Go to My Songs</button>
    </div>
  );
}
