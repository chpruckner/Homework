import React from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import Resultlist from './components/Resultlist';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        random_region: false,
        display: false
      }
      this.animals = false
  }

  componentDidMount = () => {
    axios.get('http://apiv3.iucnredlist.org/api/v3/region/list', {
      params: {
        token: '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee'
      }
    })
    .then(response => {
      //console.log(response);
      const randy = Math.floor(Math.random() * response.data.results.length);
      const region = response.data.results[randy];

      this.setState({
        random_region: region
      });
      const country = region.identifier;

      return (
        axios.get(`http://apiv3.iucnredlist.org/api/v3/species/region/${country}/page/0`, {
          params: {
            token: '9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee'
          }
        })
      );
    })
    .then(response => {
      const resp = response.data.result
      const animals = [];
      resp.map(el => {
        animals.push({
          id: el.taxonid,
          class: el.class_name,
          name: el.scientific_name,
          category: el.category
        })
      });
      this.animals = animals;
      this.setState({
        display: animals
      });

    });
  }

  handleClick = (btn) => {
    const all = this.animals;
    let select = [];

    switch (btn) {
      case "mammal":
        all.forEach(el => el.class === "MAMMALIA" ? select.push(el) : null);
        console.log("Select mammal: ", select);
        break;

      case "cr":
        all.forEach(el => el.category === "CR" ? select.push(el) : null);
        console.log("Select cr: ", select);
        break;

      case "all":
        select = all;
        break;
    }

    this.setState({
      display: select
    });

  }

  render() {
      return(
        <div className="App">
          <Header region={this.state.random_region.name} onclick={this.handleClick} />
          {this.state.display && <Resultlist animals={this.state.display} />}
      </div>
      );
  }
}

export default App;
