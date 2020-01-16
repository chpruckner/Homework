import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
    return (
      <div className="App-Header">
        <Nav />
      </div>
    );
  }
}
export default Header;