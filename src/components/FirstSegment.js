import React from 'react'
import Header from './Header'
import "./FirstSegment.css"
import Dev from '../images/undraw_programming_2svr.svg'
const FirstSegment = () => {
    return (
        <div>
              <Header />
      <div style={{margin:"8% 15%",color:"white"}}>
          <div class="headdiv">
      <h1 class="heading1"><span style={{color:"#0e49b5"}}>MERN</span> STACK DEVELOPER AND DATA SCIENTIST</h1>
      <h2 class="name" style={{color:"#c70039"}}>Shaikh Sharjeel</h2>
      <h3 class="name1">Lead Developer at TechGeeks</h3>
      <img class="dev" src={Dev} alt="sharjeel" />
      </div>
      </div>
        </div>
    );
}

export default FirstSegment;