import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'

const Header = ({id}) => {
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top navbarclass" >
	<div class="container-fluid">
		<a class="navbar-brand"  style={{color:"white"}} href="/">Sk</a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav ml-auto" id="nav">
			<li class="nav-item">
				<Link  style={{color:"white"}} class={id===1?"nav-link active":"nav-link"} to="/">Home</Link>
			</li>
			<li class="nav-item">
				<Link  style={{color:"white"}} class={id===2?"nav-link active":"nav-link"} to="/aboutus">Contact Me</Link>
			</li>
		</ul>
	</div>
</div>
</nav>
    );
}

export default Header;