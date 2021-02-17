import React from 'react'
import "./CardGroup.css"
import Card from './Card'
import Aos from 'aos'
import "aos/dist/aos.css"


const CardGroup = () => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
const card1 = {
    title:"Web Developer",
    paragraph1:"I Design various type of websites such as portfolio, e-commerce, social-media etc.",
    frameworks:"ReactJs, ExpressJs, NodeJs, MongoDB",
    designtools:[
        "VS Code",
        "MongoDB Atlas",
        "Monogo Shell"
    ],
}

const card2 = {
    title:"Mobile App Developer",
    paragraph1:"I develop cross platform mobile apps i.e for Android and IOS",
    frameworks:"React Native, ExpressJs, NodeJs, MongoDB",
    designtools:[
        "Expo",
        "React Native CLI",
        "VS Code",
        "MongoDB Atlas",
        "Monogo Shell"
    ],
}

const card3 = {
    title:"Data Scientist",
    paragraph1:"I can provide AI solutions such as Developing a model which can predict stock price",
    frameworks:"Anaconda, Tensorflow",
    designtools:[
        "Spyder",
        "Colab",
    ],
}
    return (
        <section>
    <h2  data-aos="zoom-out-up" style={{color:"white",  textAlign:"center",fontSize:"3rem",marginTop:"10%",fontFamily:" 'Ranchers', cursive"}}>SKILL SET</h2>
            
        <div class="row cardroot">

<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
<Card {...card1} />
</div>

<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
<Card {...card2} />
</div>

<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
<Card {...card3} />
</div>

        </div>
        </section>
    );
}

export default CardGroup;