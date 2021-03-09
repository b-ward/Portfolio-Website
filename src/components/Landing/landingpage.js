import React, {Component} from 'react';
import './landingpage.css';

class Landing extends Component {
    render() {
        return(
            <div className="landing">
                <div className="info-wrapper">
                    <img src='../BrendonWard.png' alt="Brendon Ward" className="ri"/>
                    <div className="information">
                        <div className="title">Brendon Ward</div>
                        <div className="sub-title">Security Consultant | Developer</div>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/brendon-c-ward/" target="_blank" rel="noreferrer"><img src="../linkedin.png" className="link-image" alt="LinkedIn"/></a>
                            <a href="https://github.com/b-ward" target="_blank" rel="noreferrer"><img src="../github.png" className="link-image" alt="GitHub"/></a>
                            <a href="https://www.youtube.com/channel/UChTNiPnFbhghEbizf66WsmQ" target="_blank" rel="noreferrer"><img src="../youtube.png" className="link-image" alt="YouTube"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;