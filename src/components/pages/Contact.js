import React from "react";
import LinkedIn from "../../images/linkedin.svg"

const styles={
  link:  {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
},
list: {
  fontFamily: "monospace",
  color: "#730F0F",
  fontSize: 20
},
p: {
  fontFamily: "serif",
  color: "#730F0F",
  fontSize: 45
},
icon: {
  color: "#730F0F"
}
}

export default function Contact() {
  return(
  <div>
    <div id="header" style={styles.link}>
      <h1 style={styles.p}>Contact Information:</h1>
      <ul class= "container" style={styles.list}>
        <li>smulrow@gmail.com</li>
        <li>(602)-330-8707</li>
        <li>github.com/stephenmulrow</li>
        <li>      
        <a href="https://www.linkedin.com/in/stephen-m-b45b30153/" target="blank"><img src={LinkedIn} alt="linked in icon" height="30px" style={styles.icon}></img></a>
        </li> 
        <br></br>
      </ul>
    </div>
  </div>
  )
}