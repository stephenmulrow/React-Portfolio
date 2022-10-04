import React from "react";
import backgroundVideo from '../../images/videobg.mp4'

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

  list: {
    fontFamily: "monospace",
    color: "white"
  }
}





export default function About() {
  return (
    <main>
      <div className="overlay"></div>
      <video src={backgroundVideo} autoPlay loop muted id="video"></video>
    <div class = "container">
      <div className="content">
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.content}> 
       Thank you for checking out my website! I'm an Arizona native and a Full-Stack developer with experince using various languages and technologies. Some of the projects I have created can be found in the Projects tab. The endless possibilities of what can be created using technology motivate me each day to keep getting better.
      </p>
      <img src="https://avatars.githubusercontent.com/u/106113164?v=4" class="grad-pic"
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