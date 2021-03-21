import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Landing from './Landing/landingpage';
import About from './aboutme';
import Resume from './resume';
import Projects from './Projects/projects';
import TrainGame from './Projects/TrainGame/trainGame';
import Photos from './photos';
import Contact from './contact';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path ="/" component={Landing}/>
            <Route exact path ="/About" component={About}/>
            <Route exact path ="/Resume" component={Resume}/>
            <Route exact path ="/Projects" component={Projects}/>
            <Route exact path ="/Projects/TrainGame" component={TrainGame}/>
            <Route exact path ="/Photos" component={Photos}/>
            <Route exact path ="/Contact" component={Contact}/>
        </Switch>
    </Router>
)

export default Main;