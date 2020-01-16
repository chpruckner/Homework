import React from 'react';
import Button from './button';
import Block from './block';

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
            <Block name='content' cname='App-content' counter={this.state.counter} method={this.handleClick} />
        );
    }
}

export default Content;

