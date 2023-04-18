import React from "react";
import Logo from "../../images/S.png"

const styles = {
  subHeader: {
    fontSize: 30,
    fontStyle: "italic",
    color: "white"
  },
  
  header : {
    fontFamily: "baskerville",
    color: "white"
  },
  
  content: {
    fontFamily: "cambria",
    color: "white",
    fontSize: 17,
  },

  background: {
    color: "blue"
  },

  list: {
    fontFamily: "monospace",
    color: "white"
  }
}





export default function About() {
  return (
    







    <main class= "background">
    <div class = "container">
      <div className="content">
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.content}> 
       Thank you for checking out my website! I am an Arizona native and still call the desert home today. Graduating from the University of Arizona in 2019, with a background in business and finance, I have made the step to change gears and focus on web development and web design. I am always eager to continue to learn and grow in my skills. Click through the tabs at the top of the page to see examples of my work, my resume, and how to get in touch with me. 
      </p>
      <img src= {Logo} class="grad-pic"
       alt="grad pic" id="images"/>
    </div>
    <div class="card2">
    <div class="container">
      <h5 class="card-title" className="subHeader" style={styles.subHeader}>Skills</h5>
      <ul style={styles.list}>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>APIs</li>
        <li>MERN Applications</li>
      </ul>
      <ul class="list2" style={styles.list}>
        <li>MySQL</li>
        <li>ORM</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>OOP</li>
        <li>PWA</li>
      </ul> 
    </div>
  </div>
  </div>
    </main>
  )
} 