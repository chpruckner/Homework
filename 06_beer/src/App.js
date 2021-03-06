import React from 'react';
import './App.css';
import ListContainer from './components/Lists';
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
      searchInput: "",
      favs: []
    };
  }

  componentDidMount = () => {
    fetch("https://api.punkapi.com/v2/beers/random")

    .then(response => response.json())
    .then(data => this.setState({
        beers: data
      })
    );
  }

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    });
  }
  
  handleButton = (searchString) => {
    const string = String(searchString).trim();
    const noSpaceString = string.split(' ').join('_');
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${noSpaceString}`)
    .then(resp => resp.json())
    .then(data => this.setState({
        beers: data
      })
    );
    this.setState({
      searchInput: ""
    })
  }

  createFavList = (id) => {
    //console.log("ID: ",id);
    const beerID = String(id);
    let favList = this.state.favs;
    if (!favList.includes(beerID)) {
      favList.push(beerID);
      this.setState({
        favs: favList
      });
    } else if (favList.includes(beerID)) {
      let index = favList.indexOf(beerID);
      favList.splice(index, 1);
      this.setState({
        favs: favList
      });
    }
    //console.log("Fav Listn: ", this.state.favs)
    return this.fetchFavourites(this.state.favs);
  }

  fetchFavourites = (favArr) => {
    const idString = favArr.join("|");
    fetch(`https://api.punkapi.com/v2/beers?ids=${idString}`)
    // Transform the returned json string data into a real json object.
    .then(response => response.json())
    // what to do with the data?
    .then(data => {
        this.setState({
          favBeers: data
        });
      }
    );
  }

  render() {
    //console.log(this.state.beers);
    return (
      this.state.beers && 
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-dark bg-dark mb-4">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link text-light font-weight-bold" to="/">Start</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light font-weight-bold" to="/favs">My Favourites</Link>
                </li>
              </ul>
              <span className="navbar-text">
                Start with a random craft beer and search for your favourites!
              </span>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/favs">
                <main className="px-5 mx-5">
                  {this.state.favBeers ? <ListContainer beers={this.state.favBeers} markFav={this.createFavList} /> : null }
                </main>
              </Route>
              <Route path="/">
                <main className="px-5 mx-5">
                  <form className="form-inline">
                    <input 
                      type="text" 
                      className="form-control mb-2 mr-sm-2" 
                      id="searchInput" 
                      placeholder="Search tha beer..." 
                      onChange={this.handleSearch} 
                      value={this.state.searchInput}
                    />
                    {/*console.log(this.state.searchInput)*/}
                    <button type="button" className="btn btn-primary mb-2" onClick={() => this.handleButton(this.state.searchInput)}>Submit</button>
                  </form>
                  <ListContainer beers={this.state.beers} markFav={this.createFavList} />
                </main>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  
}

export default App;
