import React, { Component } from 'react';
import $ from 'jquery'; 
import Container from 'react-bootstrap/Container'
import '../css/style.css';
import { scroll_anywhere } from './utils';
import ukraine from '../img/ukraine.svg'

class Navbar extends Component {
	componentDidMount(){
		$("#menu").click(function(){
			$(".bar1").toggleClass("change");	
			$(".bar2").toggleClass("change");	
			$(".bar3").toggleClass("change");	
			$(".navbar-box").toggleClass("move-away");	
		}); 
    }

	render() {
        return (
            <div id = "mynavbar" className="mynavbar">
                <Container>		
                    <div className="contact-mobile visible-xs-block">
                        <ul></ul>
                        </div>
                        <div id="menu">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="bar1"></span>
                            <span className="bar2"></span>
                            <span className="bar3"></span>
                        </div>
                        <div className="navbar-box">
                            <ul className="nav-left">
								<li className="active">
									<a href="#header" className="scroll-button glyphicon glyphicon-home" onClick={(e)=>{scroll_anywhere(e)}}> </a>
								</li>
								<li><a href="#about" className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>About</a></li>
								<li><a href="#portofolio" className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>Portofolio</a></li>
								<li><a href="#contact" className="scroll-button" onClick={(e)=>{scroll_anywhere(e)}}>Contact</a></li>
							</ul>
                            <ul className="nav-right hidden-xs" style={{"marginRight":"0px"}}>
								<li><a href="tel:+40729699148" target="_top"><span>0729.699.148</span></a></li>
								<li>
									<a href="https://www.linkedin.com/in/oanapopescu93/" rel="noopener noreferrer" target="_blank">
										<span className="fa fa-linkedin"></span>
									</a>
								</li>
								<li>
									<a href="https://github.com/oanapopescu93" rel="noopener noreferrer" target="_blank">
										<span className="fa fa-github"></span>
									</a>
								</li>
								<li>
									<img id="ukraine_icon" alt="ukraine_icon" src={ukraine} style={{"width":"20px"}}/>
								</li>
							</ul>
                        </div>
                </Container>		
            </div>
        );
    }
}

export default Navbar;