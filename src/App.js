import './App.css';
import React, {Component} from 'react';
import {Layout} from 'react-mdl'

import Main from './components/main'
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render(){
    let backdrop;
    console.log(this.state.sideDrawerOpen)

    if(this.state.sideDrawerOpen){
      backdrop=<Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div style={{height:"100%"}}>
        <Layout>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}
          <div className="page-content" style={{marginTop: '56px'}}>
            <Main/>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
