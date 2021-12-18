import React from 'react'
import "./Footer.css"
import {ReactComponent as Whatsapp} from '../images/whatsapp.svg'
import {ReactComponent as Gmail} from '../images/gmail.svg'
import Aos from 'aos'
import "aos/dist/aos.css"

const Footer = () => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return (
        <footer style={{backgroundColor:"#6930c3"}}>
        <h3 class="footerheading" data-aos="zoom-out-up">Hustle, Live, Be Grateful</h3>
        <div class="row" style={{margin:"2% auto 1% auto", padding:0,width:"30%"}}>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="flip-up">
        <Whatsapp data-aos="flip-up" class="svg"fill = "#64dfdf" stroke="white" style={{width:"35%",height:"35%"}} /><p data-aos="zoom-out-up" style={{color:"white",opacity:0.8,marginRight:"4%"}}>+919665276786</p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="flip-up">
        <Gmail data-aos="flip-up" class="svg" fill = "#64dfdf" stroke="white" style={{width:"35%",height:"35%"}} /><p data-aos="zoom-out-up" style={{color:"white",opacity:0.8,marginRight:"4%"}}>sharjeelarts@gmail.com</p>
        </div>
        </div>
        <div class="icons">
        <a data-aos="flip-up" href="https://www.instagram.com/sharjeel_sk_/" target="_blank"  rel="noreferrer"><i class="fab fa-instagram fa-3x" aria-hidden="true"></i><span></span></a>
        <a data-aos="flip-up" href="https://www.linkedin.com/in/sharjeel-shaikh-79308a174" target="_blank"  rel="noreferrer"><i class="fab fa-linkedin-in fa-3x"  aria-hidden="true" ></i><span></span></a> 
       <a data-aos="flip-up" href="https://github.com/sharjeelsk" target="_blank"  rel="noreferrer"><i class="fab fa-github fa-3x"  aria-hidden="true" ></i><span></span></a> 
       </div>
        </footer>
    );
}

export default Footer;