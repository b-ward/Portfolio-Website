import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './Landing/landingpage';
import About from './About/about';
import CV from './CV/cv';
import Projects from './Projects/projects';
import TrainGame from './Projects/TrainGame/trainGame';
import Photos from './Photos/photos';
import Contact from './contact';
import NoisyDetector from './Projects/NoisyDetector/noisyDetector';
import Arbitrage from './Projects/Arbitrage/arbitrage';
import TrioHome from './Projects/Trio/trioHome';
import TrioGame from './Projects/Trio/trioGame';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path ="/" component={Landing}/>
            <Route exact path ="/About" component={About}/>
            <Route exact path ="/CV" component={CV}/>
            <Route exact path ="/Projects" component={Projects}/>
            <Route exact path ="/Projects/Arbitrage" component={Arbitrage}/>
            <Route exact path ="/Projects/Trio" component={TrioHome}/>
            <Route exact path ="/Projects/TrioGame" component={TrioGame}/>
            <Route exact path ="/Projects/TrainGame" component={TrainGame}/>
            <Route exact path ="/Projects/Noise" component={NoisyDetector}/>
            <Route exact path ="/Photos" component={Photos}/>
            <Route exact path ="/Contact" component={Contact}/>
        </Switch>
    </Router>
)

export default Main;