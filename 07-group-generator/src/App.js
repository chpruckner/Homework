import React from 'react';

/* Styles */
import './App.css';

/* Components */
import Header from "./components/Header";
import Main from "./components/Main";
import {
  BrowserRouter as Router
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <Header />
        <Main />
      </Router>
  );
}
}

export default App;
