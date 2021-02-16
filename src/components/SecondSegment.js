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
        <p class="secondpara" data-aos="fade-up">Tempor irure elit qui excepteur elit cillum incididunt labore. Proident incididunt dolore tempor aliqua cupidatat exercitation excepteur nisi ex id sunt non adipisicing. Reprehenderit proident ex voluptate ex quis reprehenderit deserunt duis Lorem duis proident. Proident incididunt non Lorem irure sit duis in adipisicing cupidatat aute veniam nisi deserunt.</p>
        </div>
    );
}

export default SecondSegment;