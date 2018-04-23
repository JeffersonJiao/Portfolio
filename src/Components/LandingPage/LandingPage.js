import React, { Component } from 'react';
import './LandingPage.css'

class LandingPage extends Component {
    render(){
        return(
            <section className="landing-wrapper" name="landing">
                <div className="landing-left">
                    <div>
                        <p>MY PORTFOLIO</p>
                        <h1>The best is yet to come</h1>
                    </div>
                </div>
                <div className="landing-right">
                    <div class="my-image">
                    </div>
                </div>
                <div className="scroll-image"></div>
            </section>
        )
    }
}

export default LandingPage;