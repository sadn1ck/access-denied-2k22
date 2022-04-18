import React from 'react'
import { Link } from 'react-router-dom'
import evS from '../assets/img/sch/es2.jpg'

const Sch = () => {
  return (
    <div className='sch-page'>
        {/* <div className='s-001'>
        </div> */}
        <div className="s-002-page">
        <div className="s-002">
            {/* <div className="img">
                <img src={evS} alt="" />
            </div> */}
            <div className="evt-sch" id="schedule">
                <div className="eve-head">
                    <h1>EVENT SCHEDULE</h1>
                </div>
                <div className="event-name">
                    <h2>Access Denied 2022</h2>
                </div>
                <div className="eve-start">
                        <p>Starts: 4:00 p.m, <span>Saturday, 15 May, 2021</span></p>
                </div>
                <div className="eve-end">
                    <p>Ends: 4:00 p.m, <span>Saturday, 17 May, 2021</span></p>
                </div>
                <div className="register-btn-cont">
                    <Link className='register-btn' to="/">Register now</Link>
                </div>
            </div>
        </div>
        </div>
        
        {/* <div className='s-003'>
        </div> */}
    </div>
    
  )
}

export default Sch