import React from 'react';
import './index.css';

const Videoitem = (props) => {
    const { id, thumbnail_url, title, width, height } = props;

    return (
        <div className="media pb-3 mb-3 border-bottom" onClick={() => props.select(id, title)}>
            <img src={thumbnail_url} width={width} height={height} alt={title} 
                className="align-self-start mr-3" />
            <div className="media-body">
                <h5 className="mt-0">{title}</h5>
            </div>
        </div>
    );
} 


export default Videoitem;