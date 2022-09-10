import React from "react";

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
}

export default function Resume() {
  return (
    <div id="header" style={styles.link}>
    <div id="container">
      <h1 style={styles.p}>Click the link below to download my Resume!</h1>
      <br>
      </br>
      <br>
      </br>
      <p>
      <a href="https://docs.google.com/document/d/1x_LSIMXQNr18-VRuLAHT82JDCFCSrU1baQ3Bc_w65jk/edit" target="blank" class="btn btn-secondary">Resume</a>
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