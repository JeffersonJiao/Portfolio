import React, { Component } from 'react';
import './LandingPage.css'

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            justLoad: false,
        }

    }

    render(){
        return(
            <section className="landing-wrapper" name="landing">
                <div className="landing-left">
                    <div>
                        <p>MY PORTFOLIO</p>
                        <h1>Hard Work Beats Talent  <br/> When Talent Fails To Work Hard</h1>
                    </div>
                </div>
                <div className="landing-right">
                    <div className="my-image" >
                    </div>
                </div>
                <div className="scroll-image"></div>
            </section>
        )
    }
}

export default LandingPage;