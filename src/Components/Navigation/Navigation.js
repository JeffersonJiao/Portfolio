import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './Navigation.css'

class Navigation extends Component {
    render(){
        return(
            <nav>
                <span>
                    <li><Link activeClass="active" to="landing" spy={true} smooth={true} duration={500} >JSJIAO</Link></li>
                </span>
                <ul className="nav">
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About me</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></li>
                    <li><Link activeClass="active" to="work" spy={true} smooth={true} duration={500} >Works</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;