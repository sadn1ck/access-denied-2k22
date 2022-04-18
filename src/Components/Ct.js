import React from 'react'
import '../css/Ct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram, faTwitter, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Ct = () => {
  return (
    <section className="ct-section" id='contact'>
      <div className="ct-form-div">
          <div className="ct-heading">
            <h1>CONTACT US</h1>
          </div>
          <form action="">
              <div className="form-grp">
                <input type="text" name="" id="" placeholder='your name...' />
              </div>
              <div className="form-grp">
                <input type="text" name="" id="" placeholder='your email'/>
              </div>
              <div className="form-grp">
                <textarea name="" id="" cols="30" rows="10" placeholder='your message...'></textarea>
              </div>
              <div className="form-grp">
                <button type="submit">
                  Submit
                </button>
              </div>
          </form>
      </div>
      <div className="ct-det-div">
        <div className="ct-det">
          <div className="ct-address">
                <div className="address-head">
                  <h2>ADDRESS</h2>
                </div>
                <div className="address-desc">
                  <p>Indian Institute of Engineering Science & Techology, Shibpur.</p>
                  <p>Howrah, West Bengal - 711 103.</p>
                </div>
          </div>
          <div className="soc-links">
            <div className="soc-lin-grp">
              <p><a target="_blank" href="https://codeiiest.org/"><FontAwesomeIcon icon={faGlobe} />&emsp; www.codeiiest.org</a></p>
            </div>
            <div className="soc-lin-grp">
              <p><a href="mailto:codeiiest.iiest@gmail.com"><FontAwesomeIcon icon={faEnvelope} />&emsp; codeiiest.iiest@gmail.com</a></p>
            </div>
            <div className="soc-lin-grp">
              <p><FontAwesomeIcon icon={faPhone} />&emsp; +91 9553575476</p>
            </div>
          </div>
          <div className="soc-icons">
            <div className="soc-icons-head">
              <h3>Also follow us on</h3>
            </div>
            <div className="icons">
              <a href="https://www.youtube.com/codeiiest" target="_blank"><FontAwesomeIcon className='font-icon-style' icon={faYoutube} /> </a>
              <a href="https://twitter.com/codeiiest" target="_blank"><FontAwesomeIcon className='font-icon-style' icon={faTwitter} /> </a>
              <a href="https://www.facebook.com/CodeIIEST" target="_blank"><FontAwesomeIcon className='font-icon-style' icon={faFacebookF} />  </a>
              <a href="https://github.com/CodeIIEST-dev" target="_blank"><FontAwesomeIcon className='font-icon-style' icon={faGithub} />  </a>
            
            </div>
          </div>
        </div>
          
      </div>
    </section>
    
  )
}

export default Ct