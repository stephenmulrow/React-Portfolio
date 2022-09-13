import React from "react";
import LinkedIn from "../../images/linkedin.svg"

const styles={
  link:  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  p: {
    fontFamily: "serif",
    color: "#730F0F",
    fontSize: 45
  },
  p2: {
    fontFamily: "serif",
    color: "#730F0F",
    fontSize: 29
  },
}

export default function Contact() {
  return(
    <div id="header" style={styles.link}>
    <div id="container">
      <h1 style={styles.p}>Contact Me!</h1>
      <br>
      </br>
      <br>
      </br>
      <p style={styles.p2}>
      smulrow@gmail.com
      <br></br>
      (602)-330-8707
      <br></br>
      github.com/stephenmulrow
      </p>
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