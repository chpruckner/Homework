import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
      super(props);
      this.state = {};
    }
    render () {
        return (
          <nav>
            <ul>
                <li>
                <Link to="/">Teams</Link>
                </li>
                <li>
                <Link to="/admin">Admin</Link>
                </li>
            </ul>
          </nav>
        );
    }
}
  export default Nav;