import React from "react"
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
      <Router>
      <Navigation />
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
              <Route 
                path="/about" 
                element={<About />} 
              />
              <Route 
                path="/React-Portfolio" 
                element={<About />} 
              />
              {/* Define a route that will take in variable data */}
               <Route 
                path="/React-Portfolio/contact" 
                element={<Contact />} 
              />
              <Route
                path="/React-Portfolio/portfolio"
                element={<Project />}
                />
              <Route
                path="/React-Portfolio/resume"
                element={<Resume />}
                /> 
            </Routes>
          </div>
          
        </div>
      <Footer />
      </Router>
      {/* Herewe are calling the renderPage method which will return a component  */}
      
    </div>
  );
}