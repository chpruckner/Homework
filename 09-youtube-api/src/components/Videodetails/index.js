import React from 'react';

const Videodetails = (props) => {
    const { id, title, description } = props.video;
    return (
        <div className="selected-video">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="video player" className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h4 className="mt-2">{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Videodetails;