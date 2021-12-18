import React from 'react'
import "./SecondSegment.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const SecondSegment = () => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return (
        <div class="rootseconddiv">
        <h3 class="secondheading" data-aos="fade-down">Hey, This is <span style={{color:"lightblue"}} data-aos="fade-down">Sharjeel</span>. It's a pleasure to meet you</h3>
        <p class="secondpara" data-aos="fade-up">
        I am a MERN stack developer i.e mongo, express, react and node. I was interested in this domain of computers since as I was 4. I started coding at the age of 16 before that I used to create graphic designs
        . I am a consistent learner i.e I love to learn new stuff and Coding is my passion and I love to do it without any sort of tiredness whatsover !
        </p>
        </div>
    );
}

export default SecondSegment;