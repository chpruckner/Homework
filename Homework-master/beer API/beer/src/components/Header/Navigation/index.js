import React from 'react';
import './index.css'
import { bubble as Menu } from 'react-burger-menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false,
        }
    }

     // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
    showSettings (event) {
      event.preventDefault();
      
    }
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
        
        <Menu right isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}>
          <Link to="/Beers" onClick={() => this.closeMenu()}>Beers</Link>
          <Link to="/My Favourites" onClick={() => this.closeMenu()}>My Favourites</Link>
        </Menu>
      );
    }
  }

  export default Navigation;