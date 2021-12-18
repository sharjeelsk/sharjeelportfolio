import React from 'react'
import "./FirstSegment.css"
import Dev from '../images/undraw_programming_2svr.svg'
import bar1 from '../images/animation/leftbrace.png'
import bar2 from '../images/animation/rightbrace.png'
import keyboard from '../images/animation/output-onlinepngtools.png'
import keyboard1 from '../images/animation/output-onlinepngtools1.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const FirstSegment = () => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return (
        <div>
            <img src={bar1} alt="sorry" class="bar1" />
            <img src={bar2} alt="sorry" class="bar2" />
            <img  data-aos="fade-down-right" src = {keyboard} alt="keyboard" class="keyboard" />
            <img data-aos="fade-down-left"  src = {keyboard1} alt="keyboard" class="keyboard1" />
      <div style={{margin:"8% 15%",color:"white"}}>
          <div class="headdiv">
      <h1 class="heading1"><span style={{color:"#0e49b5"}}>MERN</span> STACK DEVELOPER AND DATA SCIENTIST</h1>
      <h2 class="name" style={{color:"#c70039"}}>Shaikh Sharjeel</h2>
      <h3 class="name1">CEO at TechGeeks</h3>
      <img class="dev" src={Dev} alt="sharjeel" />
      </div>
      </div>
        </div>
    );
}

export default FirstSegment;