import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPortfolio from './Pages/Home/MyPortfolio';
import AboutMe from './Pages/Home/AboutMe';
import ContactMe from "./Pages/Home/ContactMe";
import MySongs from './Pages/Home/MySongs'; 
import Games from './Pages/Home/Games';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/my-songs" element={<MySongs />} />
        <Route path="/games" element={<Games />} />

        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

