import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class Toggle extends React.Component {
        constructor(props) {
                super(props);
            
                this.state = {
                    isToggleOn: true
                }; 

            this.handleClick = this.handleClick.bind(this);
        }
                
        handleClick(){
            console.log(this);
            this.setState({
            isToggleOn : !this.state.isToggleOn
            })
        };
        
         render(){
            return(
            <button type="button" onClick={this.handleClick}> 
                {this.state.isToggleOn ? 'ON':'OFF'} 
            </button>
            )
        } 
}

ReactDOM.render(<Toggle />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();



/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class Toggle extends React.Component {
        constructor(props) {
                super(props);
            
                this.state = {
                    isToggleOn: true
                }; 
            this.handleClick = this.handleClick.bind(this);
        };
                
        handleClick(){
            console.log(this);
            this.setState({
                isToggleOn : !this.state.isToggleOn
            })

        Output(){
            return(
                    <button type="button" onClick={this.handleClick}> 
                        {this.state.isToggleOn ? 'ON':'OFF'} 
                    </button>
            );       
        }
            
        };
                  
         render(){
            if (this.state.isToggleOn){
                return(
                <div class="wrapper">
                   <Output /> 
                </div>
                );
            }
            else {
                return(
                    <div class="wrapper">
                    <DisplayText text="huii!" />
                 <Output />
                    </div>
                );
            }            
        } 
    };


function DisplayText(props){
    return(
    <h1>{props.text}</h1>
    )
};

//ReactDOM.render(<DisplayText text='hui!' />, document.getElementById('root'));

ReactDOM.render(<Toggle />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();*/