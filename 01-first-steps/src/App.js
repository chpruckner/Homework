import React from 'react';
import './App.css';
import { func } from 'prop-types';

function App() {
  function formatName(user) {
    return user.lastName + '. ' + user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'James',
    lastName: 'Bond'
  };
    
  /*
  const element = (
    <div>
      <h1>My name is {formatName(user)}.</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  return element;*/
  
  function tick() {
    const element = (
      <div>
        <h1>My name is {formatName(user)}.</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

    return element;
  }

  const TICKA = setInterval(tick, 1000);

}

export default App;
