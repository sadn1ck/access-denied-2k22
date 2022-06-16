import React, { useEffect } from 'react'
// import bgv from '../assets/vid/v1.mp4';
import bgIm from '../assets/img/main/m1.jpg';

import '../css/Main.css';

const Main = () => {

  let timer = 10;
  const timerFunc = () => {
    // Set the date we're counting down to
    var countDownDate = new Date("Jun 10, 2022 16:00:00").getTime();
  // Update the count down every 1 second
    var x = setInterval( function() {
    // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      if(days < 0 || hours < 0 || minutes < 0 || seconds << 0){
        timer = -1;
      }
      
      // Display the result in the element with id="demo"
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("mins").innerHTML = minutes;
      document.getElementById("secs").innerHTML = seconds;
  
      // If the count down is finished, write some text
      // if (distance < 0) {
      //   clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
      // }
    }, 1000);

  }

  useEffect(() => {
    timerFunc();
  }, [])
  


  return (
    <section className="main-container">
        {/* <div className="bg-video-wrapper">
          <video autoPlay="autoplay" loop muted>
            <source src={bgv} type="video/mp4"></source>
          </video>
          <div className="bg-video-overlay"></div>
        </div> */}
        <div className="main-cont">
          <center>
          <div className="code-iiest">
            <h1><span className='code'>Code</span><span className='iiest'>IIEST</span></h1>
            <p>presents</p>
          </div>
          <div className="acc-den">
              <h1>ACCESS DENIED</h1>
          </div>
          <div className="a-2022">
            <h2>2022</h2>
          </div>
          <div className="timer">
            <p className="event-starts">Event Starts in</p>
            <div className="timings">
              {
                (timer < 0) && (
                  <>
                  <div className="time-box">
                    <p><span id="days"></span> days </p>
                  </div>
                  <div className="time-box">
                      <p><span id="hours"></span> hrs</p>
                  </div>
                  <div className="time-box">
                        <p><span id="mins"></span> mins </p>
                  </div>
                  <div className="time-box">
                        <p><span id="secs"></span> secs</p>
                  </div>
                  </>
                  
                )
              }
              <div className="time-box">
                <p>EVENT COMPLETED</p>
              </div>

            </div>
          </div>
          </center>
        </div>
    </section>
  )
}

export default Main