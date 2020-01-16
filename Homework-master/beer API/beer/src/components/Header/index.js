import React from 'react';
import './index.css';
import Navigation from './Navigation'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchInput: ""
      };
    }
  
    handleSearch = e => {
      this.setState({
        searchInput: e.target.value
      });
    };

    onKeyPress = (event) => {
      if (event.key === "Enter") {
        //alert(22);
        this.props.handleButtonSearch(this.state.searchInput)
      }}
  
    render() {
      return (
        <header className="App-header">
        <Navigation />
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" onChange={this.handleSearch} onKeyPress={this.onKeyPres} value={this.state.searchInput} />
        </Form> 
          <button className="btn search" onClick={() => this.props.handleButtonSearch(this.state.searchInput)}>
            Search
          </button>
          <button className="btn all" onClick={this.props.handleButtonAll}>
            all
          </button> 
         
        </header>
      );
    }
  }
  
  export default Header;