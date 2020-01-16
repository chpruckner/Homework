import React from 'react';
import Button from './button';

function Block(props){
    return(
    <div className={props.cname}>
            {props.name}
            <br />
            Counter: {props.counter}
            <br />
            <Button click={props.method} name={props.name} />
            </div>
    )
}

export default Block;