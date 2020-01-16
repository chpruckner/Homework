import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ListContainer from './components/Main/List'
import "react-pagination-library/build/css/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beers: false,
      fav: [],
    };
   this.handleButtonAll = this.handleButtonAll.bind(this)
  }

  handleButtonAll() {
    
    fetch('https://api.punkapi.com/v2/beers')
      .then (response => response.json())
      .then (resp => {
        const beers = [];
        
        resp.map(beer => {
          beers.push({
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            image_url: beer.image_url
          })
        });

        this.setState({
          beers: beers
        });
        console.log('Json:', resp);
        console.log("arr", beers);
        console.log("mount", this.state.beers); 
      })
  }
  
  handleButtonSearch = searchInputValue => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchInputValue}`)
      .then (response => response.json())
      .then (resp => {
        const beers = [];
        
        resp.map(beer => {
          beers.push({
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            image_url: beer.image_url
          })
        });

        this.setState({
          beers: beers
        });
        console.log('Json:', resp);
        console.log("arr", beers);
        console.log("state", this.state.beers); 
      })
  };

  handleFav = id =>{
    /* alert(22); */
    console.log("ID: ",id);
    const beerID = String(id);
    let favList = this.state.fav;
    if (!favList.includes(beerID)) {
      favList.push(beerID);
      this.setState({
        fav: favList
      });
    } else if (favList.includes(beerID)) {
      let index = favList.indexOf(beerID);
      favList.splice(index, 1);
      this.setState({
        fav: favList
      });
    }
    console.log("Fav", this.state.fav)
    return this.fetchFavourites(this.state.fav); 
    }
  
    fetchFavourites = (fav) => {
      const id = fav.join("|");
      fetch(`https://api.punkapi.com/v2/beers?ids=${id}`)
      .then(response => response.json())
      .then(resp => {
          this.setState({
            favBeerList: resp
          });
        }
      );
      console.log('favBeerList', this.state.favBeerList)
    }
  
    fetchPagination = (page) => {
      fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
      .then(response => response.json())
      .then(resp => {
        const beers = []; 
        resp.map(beer => {
          beers.push({
            id: beer.id,
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            image_url: beer.image_url
          })
        });

        this.setState({
          beers: beers
        });
        }
      );
    }

  render() {
    return (
      <div className="App">
        <Router>
        <Header handleButtonAll={this.handleButtonAll}
                handleButtonSearch={this.handleButtonSearch}
               
                /> 
       <Switch>
          <Route path='/Beers'>
            {this.state.beers && <ListContainer beers={this.state.beers} markFav={this.handleFav} />}
          </Route>
          <Route path='/My Favourites'>
            {this.state.favBeerList && <ListContainer beers={this.state.favBeerList} markFav={this.handleFav} />}         
         </Route>
        </Switch>
       </Router>
       <Footer  pagination={this.fetchPagination}/>
       {console.log('app this.state api',this.state.beers)}
       {console.log('app this.state fav',this.state.fav)}
      </div>
    );
  }
}

export default App;
