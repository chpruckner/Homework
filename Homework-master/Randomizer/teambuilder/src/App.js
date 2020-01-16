import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from './Components/Header';
import Main from './Components/Main';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
  return (
    <div className="App">
    <Router>
      <Header />
      <Main />
    </Router>
    </div>
  );
  }
}

export default App;
