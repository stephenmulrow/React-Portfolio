import React from "react";


const styles = {
  subHeader: {
    fontSize: 30,
    fontStyle: "italic"
  },
  
}





export default function About() {
  return (
    <main>
    <div class = "container">
      <h1>Who Am I?</h1>
      <p> 
       Thank you for checking out my website! Here you will find some of the fun things that I have been up to recently. I am a recent graduate of the University of Arizona Coding Bootcamp. This is actually my second accredidation from the UofA, as I obtained my Bachelor's degree from there in 2019(Bear Down!). Since then, I have worked primarily in the mortgage industry, and while I enjoyed that field, I really feel much more at home moving into the tech space. The endless possibilities of what can be created motivate me each day to keep getting better. Please feel free to take a look around, check out some of my projects, and reach out! I hope you have an amazing day. 
      </p>
      <img src="https://avatars.githubusercontent.com/u/106113164?v=4" class="grad-pic"
       alt="grad pic" id="images"/>
    </div>
    <div class="card2">
    <div class="card-body">
      <h5 class="card-title" className="subHeader" style={styles.subHeader}>Skills</h5>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>APIs</li>
        <li>MERN Applications</li>
      </ul>
      <ul class="list2">
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