import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useSponsBody from "./hooks/useSponsBody";
import useSponsBtn from "./hooks/useSponsBtn";
import useSponsRef from "./hooks/useSponsRef";


const Sponsers = () => {

  const sponsersRef = useRef();
  const sponsBodyRef = useRef();
  const sponsBtnRef = useRef();

  useSponsRef({
    root:null,
    rootMargin:'0px',
    threshold:'0.3'
  }, sponsersRef)

  useSponsBody({
    root:null,
    rootMargin:'0px',
    threshold:'0.3'
  }, sponsBodyRef)

  useSponsBtn({
    root:null,
    rootMargin:'0px',
    threshold:'0.3'
  }, sponsBtnRef)


  return (
    <section className="sponsers-container">
      <div className="sponsers-cont" >
        <div className="head" ref={sponsersRef}>
          <center>
            <h1>OUR SPONSERS</h1>
          </center>
        </div>
        <div className="spons-body" >
          <div className="spons-body-intro">
            <div className="spons-body-intro-p" ref={sponsBodyRef}>
              <p>
                If you are interested in supporting ACCESS DENIED 2022, please contact
                us for more details. Let the world's best hackers get to know you!
              </p>  
            </div>
            <div className="become-sponser-link" ref={sponsBtnRef}>
              <center>
                <a className="link-btn" href="mailto:codeiiest.iiest@gmail.com">Be a sponser</a>
              </center>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
