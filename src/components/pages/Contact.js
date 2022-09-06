import React from "react";
import LinkedIn from "../../images/linkedin.svg"

const styles={
  link:  {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
}
}

export default function Contact() {
  return(
  <div>
    <div id="header" style={styles.link}>
      <h1>Contact Information:</h1>
      <ul class= "container">
        <li>smulrow@gmail.com</li>
        <li>(602)-330-8707</li>
        <li>github.com/stephenmulrow</li>
        <li>      
        <a href="https://www.linkedin.com/in/stephen-m-b45b30153/" target="blank"><img src={LinkedIn} alt="linked in icon" height="30px"></img></a>
        </li> 
      </ul>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  </div>
  )
}