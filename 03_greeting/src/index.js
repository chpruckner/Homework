import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import { ReactComponent } from '*.svg';

const UserGreeting = (props) => {
    return <h1>Welcome back!</h1>;
}

const GuestGreeting = (props) => {
    return <h1>Please sign in!</h1>;
}

const Greeting = (props) => {
    //console.log(props);
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <UserGreeting/> : <GuestGreeting />;
    // const greetMe = (isLoggedIn && <UserGreeting/>) || <uestGreeting />;
    // return greetMe;
}

const Button = (props) => {
    return <button onClick={props.onclick}>{props.text}</button>
}

class LoginControl extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoggedIn:false,
            count: 0
        };
    }

    handleLoginClick = () => {
        //console.log("handleLoginClick");
        this.setState({
            isLoggedIn:true,
            count: this.state.count + 1
        });
        console.log(this.state.count);
    };


    handleLogoutClick = () => {
        //console.log("handleLogoutClick");
        this.setState({
            isLoggedIn:false,
            count: this.state.count + 1
            });
            console.log(this.state.count);
    };

    render() {
        //let button; 
        let button = (this.state.isLoggedIn && <Button onclick={this.handleLogoutClick} text="Logout"/>) || <Button onclick={this.handleLoginClick} text="Login"/>
        //button = this.state.isLoggedIn ? <Button onclick={this.handleLogoutClick} text="Logout"/> : <Button onclick={this.handleLoginClick} text="Login"/>
        /*if (this.state.isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>Logout</button>;
        } else {
            button = <button onClick={this.handleLoginClick}>Login</button>;
        }*/
        const greeting = <Greeting isLoggedIn={this.state.isLoggedIn} />;

        let counter = this.state.count;

        return <div className="login-form">{greeting}{button}<div className="counter">{counter}</div></div>
    }
    
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById("root")
)

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
