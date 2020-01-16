import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';
import hamster from './hamster.JPG';
import { isTSConstructSignatureDeclaration } from '@babel/types';
function UserGreeting(props){
    return( 
        <h1>Welcome back!</h1>
    );
}

function GuestGreeting(props){
    return (<h1> Please sign up.</h1>);
}

function Picture(){
    return(<img src={hamster} />);
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn){
        return (<UserGreeting />);
    } else {
        return (<GuestGreeting />);
    }
}


function Button(props){
    return(
    <button type="button" onClick={props.click}> {props.text} </button>
    );
}
/*
function ButtonLogin(props){
   return(<button type="button" onClick={props.click}> Login </button>);
}*/


class LoginControl extends React.Component{ 
    constructor(props){ 
        super(props);
        this.state = {
            isLoggedIn: false,
            count: 0 
        };
        console.log(this.state.count)
    }   

    keyPressed = (e) => {
        if (e.key === "Enter") {
            console.log();
            this.handleLoginClick();
        }
      }

    handleLoginClick = (state) =>{
            this.setState({ 
                isLoggedIn: true,
                count: state.count + 1
            });
            console.log(this.state);
            
    };

    handleLogoutClick = (state) =>{
        this.setState({
            isLoggedIn: false,
            count: state.count + 1
        });
        console.log(this.state);
        
    };

    
    render(){

        let btn; 


        btn = this.state.isLoggedIn && <div> <UserGreeting /> <Button click={this.handleLogoutClick} text='Logout'/></div> ||  <div><Picture /> <GuestGreeting /> <input type="text" onKeyPress={this.keyPressed} /><Button click={this.handleLoginClick} text='Login'/></div>
        {/*
        btn = this.state.isLoggedIn ?  <div> <UserGreeting /> <Button click={this.handleLogoutClick} text='Logout'/></div> : <div><Picture /> <GuestGreeting /> <Button click={this.handleLoginClick} text='Login'/></div> */
       /* if (this.state.isLoggedIn){
            
            btn = <div> <UserGreeting /> <Button click={this.handleLogoutClick} text='Logout'/></div>
        } else {
            
            btn = <div><Picture /> <GuestGreeting /> <Button click={this.handleLoginClick} text='Login'/></div>
        }
        */}
       // btn = <button type="button" onClick={this.handleLoginClicksta}> Login </button>

        return(
            <div>
            {btn}            
            </div>
        );
    };
}


ReactDOM.render(<LoginControl isLoggedIn />, document.getElementById('root'));


serviceWorker.unregister();
    /* 
    version 1:
    const display = isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    return (display);
    
    version 2:

    const display = (isLoggedIn && <UserGreeting /> || <GuestGreeting />)
    return (display);

    */



