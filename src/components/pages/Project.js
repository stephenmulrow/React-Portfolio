import React from "react";
import noteTaker from '../../images/note-taker.png'
import marketMoment from '../../images/market-moment.png'
import socialNetwork from '../../images/social-network-api.png'
import employeeTracker from '../../images/employee-tracker.png'
import weatherDashboard from '../../images/weather-dashboard.png'
import workdayScheduler from '../../images/workday-scheduler.png'

export default function Project() {
  return (
    <main>
    <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Market Moment</h5>
      <p class="card-text">A financial application where users can monitor the price of their favorite stocks. Uses Javascripts and Third-Party APIs.</p>
      <img src= {marketMoment} alt="screenshot of market moment" id="images"></img>
      <a href="https://brandtdavidson.github.io/interactive-stock/" target="blank" class="btn btn-secondary
">Take a Look</a>
      
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Social Network API</h5>
      <img src= {socialNetwork} alt="screenshot of social network api" id="images"></img>
      <p class="card-text">A back-end social media platform that allows users to create profiles, add comments, see friends in their feed, and more. Built using Express, MongoDB, and Mongoose.</p>
      <a href="https://github.com/stephenmulrow/Social-Network-API" target="blank" class="btn btn-secondary
">Take a Look</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Employee Tracker</h5>
      <p class="card-text">A back-end employee tracker using MySQL. This application also uses dependencies from inquirer and console.table. The user can see all employess, add employees, update employee information and more.</p>
      <img src= {employeeTracker} alt="screenshot of employee tracker" id="images"></img>
      <a href="https://github.com/stephenmulrow/Employee-Tracker" target="blank" class="btn btn-secondary
">Take a Look</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Weather Dashboard</h5>
      <p class="card-text">An interactive website where users can search for any city in the world and be presented with the current weather in that city along with a 5-day forecast. Built using Javascript and third-party APIs.</p>
      <img src= {weatherDashboard} alt="screenshot of weather dashboard" id="images"></img>
      <a href="
https://stephenmulrow.github.io/Weather-Dashboard/" target="blank" class="btn btn-secondary
">Take a Look</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Note Taker</h5>
      <p class="card-text">An application that allows users to add notes throughout the day and have them automatically save, so they never lose thier reminders. This app uses Express.js and localStorage.</p>
      <img src={noteTaker} alt="note-taker-screenshot" id="images"></img>
      <a href="https://freenotetaker.herokuapp.com/notes" target="blank" class="btn btn-secondary
">Take a Look</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Work-Day Scheduler</h5>
      <p class="card-text">This application is perfect for the busy professional. With time slots each hour, the user can enter in notes or reminders throughout the day to keep track of their tasks. Also, each hour is color-coded based on what time of day the user is accessing the application. Uses moment.js, express.js, and localStorage.</p>
      <img src= {workdayScheduler} alt="screenshot of workday scheduler" id="images"></img>
      <a href="https://stephenmulrow.github.io/Work-Day-Scheduler/
      " target="blank" class="btn btn-secondary
">Take a Look</a>
    </div>
  </div>
  </main>
  
  )
}