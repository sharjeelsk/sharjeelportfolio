import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import logo from '../images/sharjeellogofinal-removebg-preview.png'
const Header = (props) => {
	console.log(props)
	return (
        <nav class="navbar navbar-expand-md navbar-light bg-light  navbarclass" >
	<div class="container-fluid">
		<a class="navbar-brand"  style={{color:"white"}} href="/"><img class="logo" src={logo} alt="logo" /></a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon" ></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto" id="nav">
			<li class="nav-item">
				{props.id==="1"?<Link  class="nav-link" style={{color:"red"}} to="/">Home</Link>:<Link  class="nav-link" style={{color:"white"}} to="/">Home</Link>}
			</li>
			<li class="nav-item">
			{props.id==="2"?<Link  class="nav-link" style={{color:"red"}} to="/contact">Contact Me</Link>:<Link  class="nav-link" style={{color:"white"}} to="/contact">Contact Me</Link>}
			</li>
		</ul>
	</div>
</div>
</nav>
    );
}

export default Header;