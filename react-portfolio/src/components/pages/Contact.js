import React from "react";

export default function Contact() {
  return(
  <main><div id="header">
    <p> If you would like to get in touch with me directly, please fill out the form below and I will be happy to get back to you in a timely manner.</p>
    <form type="input">
    <label for="email">Enter your email:</label>
    <br></br>
<input type="email" id="email" name="email" placeholder="example@email.com"></input>
<br></br>
    Enter your name
    <br></br>
<input type="name" id="name" name="name"></input>
<br></br>
    Your message:
    <br></br>
    <textarea rows = "5" cols = "60" name = "description">
         </textarea>
<br></br>
    <br></br>
    </form>
    
    </div>
  </main>
  )
}