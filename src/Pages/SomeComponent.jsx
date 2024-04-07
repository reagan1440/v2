import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SomeComponent() {
  let navigate = useNavigate();

  const goBackToAboutMe = () => {
    navigate('/about-me');
  };

  return (
    <div>
      {/* Content of your component */}
      <button onClick={goBackToAboutMe}>Back to About Me</button>
    </div>
  );
}
