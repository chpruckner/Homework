import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ToggleButton from 'react-bootstrap/ToggleButton';




const ListContainer = props => {
    return <Lists beers={props.beers} markFav={props.markFav}/>;
  };


const Lists = props => {
    const beers = props.beers;
    const listItems = beers.map(beer => (
      <ListItem key={beer.id} id={beer.id} name={beer.name} description={beer.description} tagline={beer.tagline} markFav={props.markFav} />
    ));
    return <div className="beerWrapper">{listItems}</div>;
  };

    const ListItem = props => {
        const { id, name, description, tagline } = props;
        return ( 
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{tagline}</Card.Subtitle>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <input className="form-check-input" type="checkbox" onClick={() => props.markFav(id)} id="fav" value="fav"/> Favourites
                </Card.Body>
            </Card>
        );
      };

export default ListContainer;
