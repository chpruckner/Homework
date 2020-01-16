import React from 'react';

import {
    Link
  } from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
    return (
      <div className="App">
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
      </div>
    );
  }
}
  export default Nav;