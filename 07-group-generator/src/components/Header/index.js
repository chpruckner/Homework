import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchInput: ""
      };
    }
  
    render() {
        return(
            <Nav />
        );
    }
}

export default Header;