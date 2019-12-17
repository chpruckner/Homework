import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        quotes: false
    };
  }

  componentDidMount() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
        // Transform the returned json string data into a real json object.
        .then(response => response.json())

        .then(data => this.setState({
                quotes: data
            })
        );
  }

  render() {
    //console.log(this.state.quotes);
    return (this.state.quotes && <ListContainer quotes={this.state.quotes} />);
  }
}

const ListItem = props => {
  const { quote, author } = props;
  return (
    <li>
      <span>{quote}</span>
      <span>
        {""} - <strong>{author}</strong>
      </span>
    </li>
  ); 
};

const Lists = props => {
  const quotes = props.quotes;
  console.log("blu", quotes);
  const listItems = quotes.map(quote => (
    <ListItem key={quote.id} author={quote.author} quote={quote.en} />
  ));
  return <ul>{listItems}</ul>;
};

const ListContainer = props => {
    //console.log(props.quotes);
  return <Lists quotes={props.quotes} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
