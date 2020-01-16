import React from 'react';
import Block from './block';

class Sidebar extends React.Component{
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
            <Block name='sidebar' cname='App-sidebar' counter={this.state.counter} method={this.handleClick} />
        );
    }
}

export default Sidebar; 