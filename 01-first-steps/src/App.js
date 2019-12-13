import React from 'react';
import './App.css';
//import { func } from 'prop-types';
/* 
//HOMEWORK
const App = () => {

  const user = {
    firstName: 'James',
    lastName: 'Bond'
  };
  
  const tick = () => {
    const formatName = user => {
      return user.lastName + '. ' + user.firstName + ' ' + user.lastName;
    }
    return (
      <div>
        <h1>My name is {formatName(user)}.</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }

  return (setInterval(tick, 1000));

}
*/
const Welcome = props => {
  return <h1>Hello, {props.name}</h1>;
}

const App = () => {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Lara" />
      <Welcome name="Mara" />
    </div>
  );
}

export default App;
