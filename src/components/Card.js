import React from 'react'
import "./Card.css"
import { ReactComponent as Web } from '../images/web-programming.svg';
import { ReactComponent as Mob } from '../images/coding.svg';
import { ReactComponent as Ml } from '../images/innovation.svg';
import Aos from 'aos'
import "aos/dist/aos.css"

const Card = ({title, paragraph1, frameworks, designtools}) => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    // const [title, setTitle] = React.useState("")
    // setTitle(title)
    const renderLogo = ()=>{
        switch (title) {
            case "Web Developer":
                return <Web fill="#64dfdf" stroke="white" style={{width:"20%",height:"20%"}}  data-aos="fade-up"/>
            case "Mobile App Developer":
                return <Mob fill="#64dfdf" stroke = "white" style={{width:"20%",height:"20%"}}  data-aos="fade-up" />
            case "Data Scientist":
                return <Ml fill = "#64dfdf" stroke="white" style={{width:"20%",height:"20%"}}  data-aos="fade-up"/>
            default:
                break;
        }
    }
    return (
        <div className="rootcard">
            <div style={{marginTop:"1%"}}  data-aos="fade-up">
            {
                renderLogo()
             }
             </div>
         <h3 style={{marginTop:"10%",color:"#80ffdb",fontWeight:'bold'}} data-aos="flip-up">{title}</h3>
         <p  data-aos="zoom-out-up">
    {paragraph1}
    </p>
        
        <h4 style={{color:"#64dfdf",marginTop:"15%"}} data-aos="flip-up">Languages</h4>
        <p  data-aos="zoom-out-up">
        {frameworks}
        </p>

        <h4 style={{color:"#64dfdf",marginTop:"15%"}} data-aos="flip-up">Tools</h4>
        {
            designtools.map(el=>(
                <p key={el}  data-aos="zoom-out-up">{el}</p>
            ))
        }
        </div>
    );
}

export default Card;