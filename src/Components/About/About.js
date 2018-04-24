import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render(){
        return(
            <section className="about-wrapper" name="about">
                <div className="about-me">
                    <h1>ABOUT ME</h1>
                    <hr/>
                    <div className="image-telescope"></div>
                    <div className="skills-wrapper">
                        <h2>SKILLS</h2>
                        <hr/>
                        <div className="skill-logo-wrapper">
                            <div>
                                <img src="/assets/html-5.svg" width="50px" alt="html 5 logo"/>
                                <div className="skill-desc">
                                    <h3>HTML 5 </h3>
                                    <hr/>
                                    <p></p>
                                </div>
                            </div>
                            <div>
                                <img src="/assets/css-3.svg" width="50px" alt="css 3 logo"/>
                                <div className="skill-desc">
                                    <h3> CSS 3 </h3>
                                    <hr/>
                                    <p>Bootstrap, CSS grid, Responsive</p>
                                </div>
                            </div>
                            <div>
                                <img src="/assets/javascript.svg" width="50px" alt="javascript"/>
                                <div className="skill-desc">
                                    <h3> JAVASCRIPT </h3>
                                    <hr/>
                                    <p>Javascript, Jquery , Node.js, React.js</p>
                                </div>
                            </div>
                            <div>
                                <img src="/assets/file.svg" width="50px" alt="php"/>
                                <div className="skill-desc">
                                    <h3> PHP </h3>
                                    <hr/>
                                    <p>PHP , Laravel </p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;