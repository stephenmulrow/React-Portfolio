import React from "react";
import { Link } from 'react-router-dom';


export default function Navigation(){
  return(
    <main>
{/*      
      <nav>
        <ul>
          <a href='about'>
          <li>About</li>
          </a>
          <a href='portfolio'>           <li>Portfolio</li>
          </a>
          <a href='resume'>
          <li>Resume</li>
          </a>
          <a href="contact">
          <li>Contact</li>
          </a>
          
        </ul>
      </nav> */}
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </main>
  )
}