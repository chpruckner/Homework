import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
//import Name from './App';
import * as serviceWorker from './serviceWorker';
//import { func } from 'prop-types';

class Clock extends React.Component{
    constructor(props){
        super(props); // getting the Props from the Parent, in that case form React.Component
        this.state ={
            date: new Date(),
        }
    }
    componentDidMount(props){
        this.timer = setTimeout(() => {
         setInterval(() => {
            this.tick()
        }, 1000);
    }, this.props.delay);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    };
    
    componentWillUnmount(){
        clearInterval(this.timer); 

    }
        
    render(){
        return(
            <div> 
                <h1>Hello, world!</h1>
                <h2>It is now {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

/*
function Clock(){
    return(
        <div> 
            <h1>Hello, world!</h1>
            <h2>It is now {new Date().toLocaleTimeString()}</h2>
        </div>
    );

}*/


    ReactDOM.render(
        <div>
        <Clock />
        <br />
        <Clock delay={3000} />
        <br />
        <Clock delay={8000}/> 
        </div>,
        document.getElementById('root')
    );
        




//ReactDOM.render(greeting, document.getElementById('root'));

//ReactDOM.render(<Name />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

