import data from "../../data/index.json"
import React from 'react';
import { useNavigate } from 'react-router-dom';


function MyPortfolio() {
  let navigate = useNavigate();

  const navigateToAboutMe = () => {
    navigate('/about-me');
  };

  return (
    <div>
      {/* Your portfolio content */}
      <button onClick={navigateToAboutMe}>Go to About Me</button>
    </div>
  );
}


export default MyPortfolio;