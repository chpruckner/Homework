import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const CustomButton = props => {
    return <button onClick={props.click}>{props.text}</button>;
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        quotes: false,
        random: false
    };
  }

  componentDidMount = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/lang/en")
        // Transform the returned json string data into a real json object.
        .then(response => response.json())

        .then(data => this.setState({
                quotes: data
            })
        );
  }

  handleRandomClick = () => {
    const min = 0;
    const max = this.state.quotes.length;
    const rand = Math.ceil(min + Math.random() * (max - min));
    
    return (
        console.log(rand),
        this.setState({
            random: rand
        })
    );
  }

  render() {
    //console.log(this.state.quotes);
    //return (this.state.quotes && <ListContainer quotes={this.state.quotes} />);
    //const randomquote = this.state.quotes[this.rand];
    const randNumb = this.state.random;
    if (!this.state.random) {
        return (
            <div>
                {console.log(this.state.quotes)}
                <CustomButton click={this.handleRandomClick} text="random" />
                <CustomButton click={this.handle5Click} text="show me 5" />
            </div>
        );
    } else {
        return (
            <div>
                {console.log(this.state.quotes)}
                <CustomButton click={this.handleRandomClick} text="random" />
                <CustomButton click={this.handle5Click} text="show me 5" />
                <ListContainer quotes={this.state.quotes[randNumb]} />
            </div>
        )
    }
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
  if (quotes.isArray()) {
    const listItems = quotes.map(quote => (
        <ListItem key={quote.id} author={quote.author} quote={quote.en} />
    ));
    return listItems;
  } else if (typeof quotes === "object"){
    const listItems = <ListItem key={quotes.id} author={quotes.author} quote={quotes.en} />
    return listItems;
  }
  
  return <ul>{listItems}</ul>;
  /*return <ul><ListItem author={quote.author} quote={quote} /></ul>*/
};

const ListContainer = props => {
    //console.log(props.quotes);
  return <Lists quotes={props.quotes} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
