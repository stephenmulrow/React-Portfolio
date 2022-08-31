import React, { useState } from "react"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Navigation from "./Navigation"
import Project from "./pages/Project"
import About from "./pages/About"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  
  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation />
      <Header />
      <Router>
        <div className="flex-column justify-flex-start min-100-vh" id="header">
          
          <div className="container">
            {/* Wrap Route elements in a Routes component */}
            <Routes>
              {/* Define routes using the Route component to render different page components at different paths */}
              {/* Define a default route that will render the Home component */}
              <Route 
                path="/" 
                element={<About />} 
              />
              {/* Define a route that will take in variable data */}
               <Route 
                path="/contact" 
                element={<Contact />} 
              />
              <Route
                path="/portfolio"
                element={<Project />}
                />
              <Route
                path="/resume"
                element={<Resume />}
                /> 
            </Routes>
          </div>
          
        </div>
      </Router>
      <Footer />
      {/* Herewe are calling the renderPage method which will return a component  */}
      
    </div>
  );
}