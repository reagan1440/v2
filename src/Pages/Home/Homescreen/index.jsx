import React, { useState } from "react";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import React from 'react';
import MyPortfolio from '../MyPortfolio';

export default function Home() {
  const [showHeroSection, setShowHeroSection] = useState(false);

  const handleButtonClick = () => {
    setShowHeroSection(true);
  };

  return (
    <>
      {!showHeroSection && <MyPortfolio onButtonClick={handleButtonClick} />}
      {showHeroSection && (
        <>
          <HeroSection />
          {/* <MySkills /> */}
          <AboutMe />
          {/* <ContactMe /> */}
          <Footer />
        </>
      )}
    </>
  );
}
