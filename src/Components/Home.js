import React, { useEffect , useRef} from 'react'
import '../css/styles.css'
import Main from './Main'
import Sponsers from './Sponsers'
import Footer from './Footer';
import Sch from './Sch'
import Abt from './Abt'
import Ct from './Ct'
import Men from './Men'


const Home = () => {
  return (
    <div className="higher-most-div">
        <Men />
        <Main /> 
        <Abt />
        <Sch />
        <Sponsers />
        {/* <Ct /> */}
        <Footer />
    </div>
  )
}

export default Home