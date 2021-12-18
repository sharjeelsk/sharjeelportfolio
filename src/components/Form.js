import React from 'react'
import Header from './Header'
import "./Form.css"



import Footer from './Footer'

const Form = () => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [submit, setSubmit] = React.useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(name,email,message)
        setSubmit("Submitted")
    }
    return (
        <div>
            <Header id="2" />
            <h2 class="formheading">Come Connect With Me !</h2>

            <div class="formdiv">
            
            <form onSubmit={handleSubmit} class="form">

            <div class="input1">
            <label for="name" class="label-name">
                <span class="content-name">Name:</span>
                </label>
            <input placeholder="Name" autocomplete="off" required type="text" onChange={(e)=>setName(e.target.value)} value={name} />
            

            </div>
            
            <div class="input1">
            <label>Email:</label>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
            
            <div class="input1">
            <label>Message:</label>
            <input type="textarea" placeholder="Message" onChange={(e)=>setMessage(e.target.value)} value={message} />
            </div>
            <div class="fbutton">
            <button type="Submit" class="btn btn-outline-primary" style={{padding:"1% 4%",marginTop:"3%",fontSize:"1.4rem"}}>Submit</button>
            <h3 class="ui red header" style={{fontFamily:"consolas"}}>{submit}</h3>
            </div>
            </form>
            
            </div>
            <Footer />
        </div>
    );
}

export default Form;