import React from "react";
import { Link } from 'react-router-dom';

const styles = {
  p: {
    fontSize: 45,
    fontFamily: "serif",
    fontColor: "black"
  },
  subP: {
    fontSize: 25,
    fontFamily: "serif",
    fontStyle: "italic"
  }
}

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;

// export default function Navigation(){
//   return(
//     <main>
//       <nav class="navbar navbar-expand-lg" id="header-bg">
//   <div class="container-fluid" id="navList">
//     <a class="navbar-brand" href="#"></a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <p className="p" style={styles.p}>Stephen Mulrow
//         <footer class="blockquote-footer" className="subP" style={styles.subP}>Full-Stack Developer</footer></p>
//       <ul class="navbar-nav" id="navList">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/React-Portfolio">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#portfolio">Projects</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#resume">Resume</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#contact">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </main>
//   )
// }