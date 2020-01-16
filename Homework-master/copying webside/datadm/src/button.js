import React from 'react';
import * as serviceWorker from './serviceWorker';

function Button (props){
    return(
        <button type='button' onClick={props.click}>{props.name}</button>
    )
}



export default Button; 

serviceWorker.unregister();