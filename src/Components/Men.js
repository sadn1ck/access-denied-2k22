import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Men.css';

const Men = () => {
    // const hamburgerToggler = () => {
    //     toggleBodyClass("menu-active");
    //     function toggleBodyClass(className) {
    //         document.body.classList.toggle(className);
    //     }
    // }


    
    // const navLinks = document.querySelector(".nav-links");
    // const links = document.querySelectorAll(".nav-links li");

    // hamburger.addEventListener('click', ()=>{
    // //Animate Links
    //     navLinks.classList.toggle("open");
    //     links.forEach(link => {
    //         link.classList.toggle("fade");
    //     });

    //     //Hamburger Animation
    //     hamburger.classList.toggle("toggle");
    // });

    const hamburgerToggler = () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        //Hamburger Animation
        // console.log(hamburger.classList);
        hamburger.classList.toggle("toggle");
    }


  return (
    // <section className="men-container">
    <nav>
    <div className="logo">
    <h1><span className='code'>Code</span><span className='iiest'>IIEST</span></h1>
    </div>
    <div className="hamburger" onClick={() => hamburgerToggler()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>
    <ul className="nav-links">
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><a className="nav-link" href="/#about">About</a></li>
        <li><a className="nav-link" href="/#schedule">Schedule</a></li>
        <li><Link className="nav-link" to="/rules">Rules</Link></li>
        {/* <li><Link className="nav-link" to="/faqs">FAQs</Link></li> */}
        {/* <li><a className="nav-link" href="/#contact">Contact</a></li> */}
        <li><a className="nav-link" href="https://discord.gg/hEbNUtmp">Register</a></li>
    </ul>
</nav>
    // </section>
  )
}

export default Men