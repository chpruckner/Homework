import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';
import hamster from './hamster.JPG';
import head from './head.jpeg';
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

function PictureTwo(){
    return(<img src={head} />);
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

function LoginTag(){
    return(<div><Picture /> <GuestGreeting /></div>);
}

function LogoutTag(){
    return(<div><PictureTwo /> <UserGreeting /></div>);
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

    handleLoginClick = () =>{

            this.setState({ 
                isLoggedIn: true,
                count: this.state.count + 1
            });
            console.log(this.state);
            
    };

    handleLogoutClick = () =>{
        this.setState({
            isLoggedIn: false,
            count: this.state.count + 1
        });
        console.log(this.state);
        
    };

    
    render(){

        let btn; 


        btn = (this.state.isLoggedIn && <div> <LogoutTag /> <Button click={this.handleLogoutClick} text='Logout'/><br />{this.state.count}</div>) ||  <div><LoginTag /> <input type="text" onKeyPress={this.keyPressed} /><Button click={this.handleLoginClick} text='Login'/><br />{this.state.count}</div>
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



