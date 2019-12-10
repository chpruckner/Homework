import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
function formatName(user) {
    return user.lastName + '. ' + user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'James',
    lastName: 'Bond'
  };
    

  function tick() {
    const element = (
      <div>
        <h1>My name is {formatName(user)}.</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
*/

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();