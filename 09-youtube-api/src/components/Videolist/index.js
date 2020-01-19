import React from 'react';
import Videoitem from '../Videoitem';

const Videolist = (props) => {
    const videos = props.videos.map(video => <Videoitem key={video.id} id={video.id} thumbnail_url={video.thumbnail_url} title={video.title} width={video.thumbnail_width} height={video.thumbnail_height} select={props.select} />);
    return (
        <div className="media-wrapper">
            {videos}
        </div>
    );
};

export default Videolist;