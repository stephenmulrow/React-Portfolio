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

export default function Navigation(){
  return(
    <main>
      <nav class="navbar navbar-expand-lg" id="header-bg">
  <div class="container-fluid" id="navList">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <p className="p" style={styles.p}>Stephen Mulrow
        <footer class="blockquote-footer" className="subP" style={styles.subP}>Full-Stack Developer</footer></p>
      <ul class="navbar-nav" id="navList">
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