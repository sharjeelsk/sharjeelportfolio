import React from 'react'
import "./ThirdSegment.css"

import Aos from 'aos'
import "aos/dist/aos.css"


const ThirdSegment = () => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return (
        <div class="thirdrootdiv">
        <div class="row rowdiv">
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 thirdcarddiv" id="first"> 
            <h3 class="projectheading"  data-aos="zoom-out-up">BlogWep</h3>
                <div class="projectdiv">
               <p  data-aos="zoom-out-up">A place where you can write technical blogs and can ask Technical questions</p>
               <a  data-aos="zoom-out-up" class="btn btn-outline-primary" rel="noreferrer" href="https://blogwep.herokuapp.com" target="_blank">Let's Go -></a>
            </div>
            </div>

            
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 thirdcarddiv"> 
            <h3 class="projectheading"  data-aos="zoom-out-up">SubFill</h3>

            <div class="projectdiv">
               <p  data-aos="zoom-out-up">A place to boost your social media growth </p>
               <a  data-aos="zoom-out-up" class="btn btn-outline-primary" rel="noreferrer" href="https://subfil.com" target="_blank">Let's Go -></a>
            </div>
            </div>

            
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 thirdcarddiv"> 
            <h3 class="projectheading"  data-aos="zoom-out-up">Node-Pyshell</h3>

            <div class="projectdiv">
               <p  data-aos="zoom-out-up">AI oriented Web App</p>
               <a  data-aos="zoom-out-up" class="btn btn-outline-primary" rel="noreferrer" href="https://node-pyshell.herokuapp.com/" target="_blank">Let's Go -></a>
            </div>
            </div>

        </div>
        </div>
    );
}

export default ThirdSegment;