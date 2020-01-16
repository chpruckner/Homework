import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import TeamList from "./TeamList";
import Admin from "./Admin";
import {USER} from "../../configs/constants";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
        this.users = USER
    }

    setPresent = () => {
        console.log('its alive');
        let active = this.state.active;
    }

    render() {
        return (
            <main>
                <Switch>
                <Route path="/admin">
                    <Admin users={this.users} setPresent={this.setPresent} />
                </Route> 
                <Route path="/">
                    <TeamList users={this.users} />
                </Route>
                </Switch>  
            </main>
        );
    }
}

export default Main;