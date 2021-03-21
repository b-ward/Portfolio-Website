import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClass = 'side-drawer';
    if(props.show) {
        drawerClass = 'side-drawer open';
    }
    
    return (
    <nav className={drawerClass} >
        <ul>
            <li>
                <a href="/" className="picture-wrapper">
                    <img src='../BrendonWard.png' alt="Brendon Ward" className="side-drawer-picture"/>
                    <div className="side-drawer-picture-caption">Brendon Ward</div>
                </a>
            </li>
            <li><a href="/About">About Me</a></li>
            <li><a href="/CV">CV</a></li>
            <li><a href="/Projects">Personal Projects</a></li>
            <li><a href="/Photos">Photography</a></li>
        </ul>
    </nav>)
};

export default SideDrawer;