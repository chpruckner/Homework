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
      beers: false
    }
    this.fav = [];
  }

  componentDidMount = () => {
    fetch("https://api.punkapi.com/v2/beers/random")

    .then(response => response.json())
    .then(data => this.setState({
        beers: data
      })
    );
  }

  

  render() {
    console.log(this.state.beers);
    return (
      this.state.beers && 
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Favs">My Favourites</Link></li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/">
                <ListContainer beers={this.state.beers} />
              </Route>
              <Route path="/Favs">
                <div>Favourites here</div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  
}

export default App;
