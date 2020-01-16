import React from 'react';
import Button from './button';


class Header extends React.Component{
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
            <header className="App-header">
            Header
            <br />
            Counter Header: {this.state.counter}
            <br />
            <Button click={this.handleClick} name='header' />
            </header>
        );
    }
};

export default Header;
