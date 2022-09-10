import React from "react";


const styles = {
  subHeader: {
    fontSize: 30,
    fontStyle: "italic",
    color: "#800000"
  },
  
  header : {
    fontFamily: "baskerville",
    color: "#800000"
  },
  
  content: {
    fontFamily: "monospace",
    color: "#730F0F",
    fontSize: 17
  },

  list: {
    fontFamily: "monospace",
    color: "#730F0F"
  }
}





export default function About() {
  return (
    <main id="header">
    <div class = "container">
      <h1 style={styles.header}>Who am I?</h1>
      <p style={styles.content}> 
       Thank you for checking out my website! I am a Full-Stack developer with experince using various languages and technologies. Some of the projects I have created can be found in the Portfolio tab. The endless possibilities of what can be created using technology motivate me each day to keep getting better.
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
    </main>
  )
} 