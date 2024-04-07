import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import MyPortfolio from './Pages/Home/MyPortfolio'; // Assuming this is the correct import for your portfolio page
import AboutMe from './Pages/Home/AboutMe';
import ContactMe from "./Pages/Home/ContactMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPortfolio />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<ContactMe />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

