import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';



  
    function Welcome (props) {
      console.log(props);
      return <h1>Hello, {props.name} or the obj. as a string {JSON.stringify(props)}!</h1>
    }
  
    function Name(){
      return(
          <div>
               <Welcome name="Nessa" />
               <Welcome name="Christiane" />
               <Welcome name="Silke" />
          </div>
      );
  }
  
  

/*
class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <>
      <Lander></Lander>
      </>
    )
  }
}

class Lander extends Component{
  render(){
    return(
      <> 
      <div>Lander</div>
      </>
    )
  }
}
*/
export default Name;
