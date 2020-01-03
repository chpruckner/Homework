import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
                  <Link to="/">My Favourites</Link>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/">
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
