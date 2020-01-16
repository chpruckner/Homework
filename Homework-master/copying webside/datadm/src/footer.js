import React from 'react';
import Button from './button';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            counter: 0
        }
    }
        handleClick = () => {
            this.setState({
                counter: this.state.counter + 1
            });
            console.log(this.state);
        }
    render(){
        return(
            <footer className="App-footer">
                Footer 2019
                <br />
                Counter: {this.state.counter}
                <br />
                <Button click={this.handleClick} name='footer' />
            </footer>
        );
    }
}

export default Content;
