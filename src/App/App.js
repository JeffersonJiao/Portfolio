import React, { Component } from 'react';
import Navigation from '../Components/Navigation/Navigation'
import LandingPage from '../Components/LandingPage/LandingPage'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Work from '../Components/Work/Work'
import Footer from '../Components/Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Navigation/>
       <LandingPage/>
       <About/>
       <Work/>
       <Contact/>
       <Footer/>
      </div>
    );
  }
}

export default App;
