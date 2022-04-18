import React from 'react'
import Footer from './Footer'
import '../css/Faq.css';
import Men from './Men';


const Faqs = () => {
  return (
    <section className='faq-section'>
    <Men />
    <div className="faq-container">
      <center><h1>faqs</h1></center>
    </div>
    <Footer />
  </section>
  )
}

export default Faqs