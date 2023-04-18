import React from "react";
import noteTaker from '../../images/note-taker.png'
import marketMoment from '../../images/market-moment.png'
import socialNetwork from '../../images/social-network-api.png'
import employeeTracker from '../../images/employee-tracker.png'
import weatherDashboard from '../../images/weather-dashboard.png'
import workdayScheduler from '../../images/workday-scheduler.png'
import Yusef from '../../images/Yusef.png'

const styles = {
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  list: {
    fontFamily: "monospace",
    color: "white",
    fontSize: 24
  },
  content: {
    fontFamily: "monospace",
    color: "white",
    fontSize: 17
  }
}


export default function Project() {
  return (
    <main>
    <div class="card" id="header">
       <div class="card-body">
      <h5 class="card-title" style={styles.list}>Market Moment</h5>
      <p class="card-text" style={styles.content}>A financial application where users can monitor the price of their favorite stocks. Uses Javascripts and Third-Party APIs.</p>
      <img src= {marketMoment} alt="screenshot of market moment" id="images"></img>
      <br></br>
      <a style={{flexDirection: "row"}} href="https://brandtdavidson.github.io/interactive-stock/" target="blank" class="btn btn-dark
">Deployed Application</a>
      <br></br>
      <br></br>
    <a style={{flexDirection: "row"}}  href="https://github.com/BrandtDavidson/interactive-stock" target="blank" class="btn btn-dark
">View Code</a>
    </div>
  </div>
  <div class="card" id="header-bg">
    <div class="card-body">
      <h5 class="card-title" style={styles.list}>Yusef's Middle Eastern Cuisine</h5>
      <p class="card-text" style={styles.content}>A webpage for a local middle eastern restaurant and market. Built using simple HTML and CSS. Includes links to the menu and ability to order delivery or pickup via UberEats.</p>
      <img src= {Yusef} alt="screenshot of restaurant website" id="images"></img>
      <br></br>
      <a href="https://stephenmulrow.github.io/yusefs/" target="blank" class="btn btn-dark
">Deployed Site</a>
      <br></br>
      <br></br>
 <a style={{flexDirection: "row"}}  href="https://github.com/stephenmulrow/yusefs" target="blank" class="btn btn-dark
">View Code</a>
    </div>
  </div>
  <div class="card" id="header">
    <div class="card-body">
      <h5 class="card-title" style={styles.list}>Social Network API</h5>
      <p class="card-text" style={styles.content}>A back-end social media platform that allows users to create profiles, add comments, see friends in their feed, and more. Built using Express, MongoDB, and Mongoose.</p>
      <img src= {socialNetwork} alt="screenshot of social network api" id="images"></img>
      <br></br>
      <a href="https://drive.google.com/file/d/1wu1L15s0LyOWPVV7NrZjCFBwZwyj55ex/view" target="blank" class="btn btn-dark
">Walkthourgh Video</a>
      <br></br>
      <br></br>
 <a style={{flexDirection: "row"}}  href="https://github.com/stephenmulrow/Social-Network-API" target="blank" class="btn btn-dark
">View Code</a>
    </div>
  </div>
  <div class="card" id="header-bg">
    <div class="card-body">
      <h5 class="card-title" style={styles.list}>Employee Tracker</h5>
      <p class="card-text" style={styles.content}>A back-end employee tracker using MySQL. This application also uses dependencies from inquirer and console.table. The user can see all employess, add employees, update employee information and more.</p>
      <img src= {employeeTracker} alt="screenshot of employee tracker" id="images"></img>
      <br></br>
      <a href="https://drive.google.com/file/d/1mmHSpxyI_QA-76PMFxh0bAgnP1jweZa7/view" target="blank" class="btn btn-dark
">Walkthourgh Video</a>
      <br></br>
      <br></br>
      <a href="https://github.com/stephenmulrow/Employee-Tracker" target="blank" class="btn btn-dark
">View Code</a>
    </div>
  </div>
  <div class="card" id="header">
    <div class="card-body">
      <h5 class="card-title" style={styles.list}>Weather Dashboard</h5>
      <p class="card-text" style={styles.content}>An interactive website where users can search for any city in the world and be presented with the current weather in that city along with a 5-day forecast. Built using Javascript and third-party APIs.</p>
      <img src= {weatherDashboard} alt="screenshot of weather dashboard" id="images"></img>
      <br></br>
      <a href="
https://stephenmulrow.github.io/Weather-Dashboard/" target="blank" class="btn btn-dark
">Deployed Application</a>
      <br></br>
      <br></br>
 <a href="https://github.com/stephenmulrow/Weather-Dashboard" target="blank" class="btn btn-dark
">View Code</a>
    </div>
  </div>
  <div class="card" id="header-bg">
    <div class="card-body">
      <h5 class="card-title" style={styles.list}>Note Taker</h5>
      <p class="card-text" style={styles.content}>An application that allows users to add notes throughout the day and have them automatically save, so they never lose thier reminders. This app uses Express.js and localStorage.</p>
      <img src={noteTaker} alt="note-taker-dark" id="images"></img>
      <br></br>
      <a href="https://freenotetaker.herokuapp.com/notes" target="blank" class="btn btn-dark
">Deployed Application</a>
      <br></br>
      <br></br>
 <a href="https://github.com/stephenmulrow/Note-Taker" target="blank" class="btn btn-dark
">View Code</a>
    </div>
  </div>
  <div class="card" id="header">
    <div class="card-body">
      <h5 class="card-title" style={styles.list}>Work-Day Scheduler</h5>
      <p class="card-text" style={styles.content}>This application is perfect for the busy professional. With time slots each hour, the user can enter in notes or reminders throughout the day to keep track of their tasks. Also, each hour is color-coded based on what time of day the user is accessing the application. Uses moment.js, express.js, and localStorage.</p>
      <img src= {workdayScheduler} alt="screenshot of workday scheduler" id="images"></img>
      <br></br>
      <a href="https://stephenmulrow.github.io/Work-Day-Scheduler/
      " target="blank" class="btn btn-dark
">Deployed Application</a>
      <br></br>
      <br></br>
 <a href="https://github.com/stephenmulrow/Work-Day-Scheduler" target="blank" class="btn btn-dark
">View Code</a>
<br>
</br>
<br>
</br>
<br>
</br>
    </div>
  </div>
  </main>
  
  )
}