import React, { Component } from 'react';
import { Link } from 'react-scroll'
import './Navigation.css'

class Navigation extends Component {
    constructor(props){
        super(props)
        this.state = {
            isScrolled: false,
            isMobile: false,
            toggleNav: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.mobileNav = this.mobileNav.bind(this)
      }
      componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
      }
      mobileNav(){
        this.setState(prevState => ({
            toggleNav: !prevState.toggleNav
        }));
        console.log(this.state.toggleNav)
      }
      handleScroll(){
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let scroll = {
           x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
           y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        };
        if(scroll.y > 50){
            this.setState({isScrolled: true})
        }
        else{
            this.setState({isScrolled: false})
        }
      }
      componentWillUnmount(){
        window.removeEventListener();
      }
    render(){
        return(
            <nav className={this.state.isScrolled? 'alternative-nav' : '' }>
                <span className={this.state.isScrolled? 'light-color': 'dark-color'}>
                    <li ><Link activeClass="active" to="landing" spy={true} smooth={true} duration={500} >JSJIAO</Link></li>
                </span>
                <ul className={this.state.toggleNav ? 'mobile-nav' : 'nav'}>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500} >About me</Link></li>
                    <li><Link activeClass="active" to="work" spy={true} smooth={true} duration={500} >Works</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >Contact</Link></li>
                    <li onClick={this.mobileNav}>
                        <div className={this.state.toggleNav ? 'rotate': 'ham-top'}></div>
                        <div className={this.state.toggleNav ? 'shrink': 'ham-mid'}></div>
                        <div className={this.state.toggleNav ? 'rotate2': 'ham-btm'}></div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;