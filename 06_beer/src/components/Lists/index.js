import React from 'react';
import './index.css';

const ListItem = props => {
    const { name, tagline, description, image_url } = props;
    return (
      <li>
        <div className="card mb-3 text-left">
            <div className="row no-gutters">
                <div className="col-md-1 p-4">
                    <img className="card-img" src={image_url} alt={name} />
                </div>
                <div className="col-md-11">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 >{tagline}</h6>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
      </li>
    ); 
  };
  
  const Lists = props => {
    const beers = props.beers;
    console.log("blu", beers);
    const listItems = beers.map(beer => (
      <ListItem key={beer.id} name={beer.name} tagline={beer.tagline} description={beer.description} image_url={beer.image_url} />
    ));
    return <ul>{listItems}</ul>;
  };
  
  const ListContainer = props => {
      //console.log(props.beers);
    return <Lists beers={props.beers} />;
  };

  export default ListContainer;