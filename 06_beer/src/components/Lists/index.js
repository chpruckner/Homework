import React from 'react';
import './index.css';
//import Switch from 'react-switch';

const handleFavCheckbox = (beerId) => {
    console.log(beerId);
    return beerId;
}

const ListItem = (props) => {
    const { name, tagline, description, image_url, beer_id} = props;
    const img = <img className="card-img" src={image_url} alt={name} />;
    return (
      <li>
        <div className="card mb-3 text-left">
            <div className="row no-gutters">
                <div className="col-md-1 p-4 beerpic">
                    {image_url != null && img}
                </div>
                <div className="col-md-11 d-flex flex-column align-items-stretch">
                    <div className="card-header">
                        <h5 className="card-title m-0">{name}</h5>
                    </div>
                    <div className="card-body">
                        <h6 >{tagline}</h6>
                        <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" onClick={() => handleFavCheckbox(beer_id)} id="fav" value="fav"/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">
                                <small>add to my favourites</small>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </li>
    ); 
  };
  
  const Lists = props => {
    const beers = props.beers;
    //console.log("blu", beers);
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