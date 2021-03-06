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
            <li><a href="/About">About Me</a></li>
            <li><a href="/Resume">Resume</a></li>
            <li><a href="/Projects">Personal Projects</a></li>
            <li><a href="/Photos">Photography</a></li>
        </ul>
    </nav>)
};

export default SideDrawer;