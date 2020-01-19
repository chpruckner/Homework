import React from 'react';

const Videodetails = (props) => {
    const { id, title } = props.video;
    return (
        <div className="selected-video">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h4 className="mt-2">{title}</h4>
        </div>
    );
};

export default Videodetails;