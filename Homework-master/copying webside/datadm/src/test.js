import React from 'react';

class Test extends React.Component{
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
            {this.state.conter}
        );
    }
}

export default Test; 