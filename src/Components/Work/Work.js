import React, { Component } from 'react';
import './Work.css'

class Work extends Component {
    render(){
        return(
            <section className="work-wrapper" name="work">
                <h1>Works</h1>
                <div className="work-box-wrapper">
                    <div className="work-box">
                        <div>
                            <img src="/assets/work1.jpg" alt="checkmark app"/>
                        </div>
                        <div>
                            <h3>Checkmark</h3>
                            <hr/>
                            <p>Checkmark is a live to do list with chat application. It is created with Node.js, MongoDB</p>
                            <hr/><br/>
                            <a className="button" href="http://agile-brushlands-38120.herokuapp.com/">Check it out!</a>
                        </div>
                    </div>
                   
                    <div className="work-box">
                        <div>
                            <img src="/assets/work2.jpg" alt="checkmark app"/>
                        </div>
                        <div>
                            <h3>ProDevGround</h3>
                            <hr/>
                            <p>Developers networking web application. Create and build your own project using this website.
                                This project is created with Laravel Framework with MySQL </p>
                            <hr/><br/>
                            <a className="button" href="http://k39designs.com/">Check it out!</a>
                        </div>
                    </div>
                    <div className="work-box">
                        <div>
                            <img src="/assets/work3.jpg" alt="checkmark app"/>
                        </div>
                        <div>
                            <h3>Game</h3>
                            <hr/>
                            <p>This is a simple assassination game created with Phaser.js</p>
                            <hr/><br/>
                            <a className="button" href="http://jsj-works.com/FinalGame/">Check it out!</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Work;