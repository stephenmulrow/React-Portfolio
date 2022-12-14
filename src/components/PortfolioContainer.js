import React, { useState } from "react"
import Footer from "./pages/Footer"
import Navigation from "./Navigation"
import Project from "./pages/Project"
import About from "./pages/About"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div>
      <Navigation currentPage={currentPage}
      handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  )
}
//   )
//   return (
//     <div>
//       {/* We are passing the currentPage from state and the function to update it */}
//       <Router>
//       <Navigation />
//         <div className="flex-column justify-flex-start min-100-vh" id="header">
          
//           <div className="container">
//             {/* Wrap Route elements in a Routes component */}
//             <Routes>
//               {/* Define routes using the Route component to render different page components at different paths */}
//               {/* Define a default route that will render the Home component */}
//               <Route 
//                 exact path="/" 
//                 element={<About />} 
//               />
//               <Route 
//                 path="/about" 
//                 element={<About />} 
//               />
//               {/* <Route 
//                 path="/React-Portfolio" 
//                 element={<About />} 
//               /> */}
//               {/* Define a route that will take in variable data */}
//                <Route 
//                 path="/contact" 
//                 element={<Contact />} 
//               />
//               <Route
//                 path="/portfolio"
//                 element={<Project />}
//                 />
//               <Route
//                 path="/resume"
//                 element={<Resume />}
//                 /> 
//             </Routes>
//           </div>
          
//         </div>
//       <Footer />
//       </Router>
//       {/* Herewe are calling the renderPage method which will return a component  */}
      
//     </div>
//   );
// }