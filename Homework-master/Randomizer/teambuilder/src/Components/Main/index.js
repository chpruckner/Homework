import React from 'react';

import Team from './Team';
import Admin from './Admin';

import {
  USER
} from '../../Configs/const';

import {
    Switch,
    Route,
  } from "react-router-dom";

  class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          active: true
        }
        this.users = USER
    }

    setPresent = () => {
      console.log('its alive');
    }

    
  
    render(){
    return (
      <div className="App-Main">
         <Switch>
          <Route path="/admin">
            <Admin setPresent= {this.setPresent} users= {this.users} />
          </Route> 
          <Route path="/">
            <Team users= {this.users}/>
          </Route>
        </Switch>  
      </div>
    );
    }
  }
  
  export default Main;