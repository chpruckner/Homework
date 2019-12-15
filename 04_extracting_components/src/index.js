import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleCount = () => {
        this.setState((state) => ({
            count: state.count + 1 // an object is passed on!
        }));
    }

    render() {
        return (
        <div className="counter">
            Counter {this.props.area}: {this.state.count}<br/>
            <button type="button" onClick={this.handleCount}>{this.props.area}</button>
        </div>
        );
    }
}

const Header = props => {
    return <header className="App-header">
            <h3>{props.text}</h3>
            <Counter area={props.text} />
        </header>;
};

const Main = props => {
  return (
    <main className="App-main">
      <div className="App-sidebar">
        <h3>{props.texts.sidebar}</h3>
        <Counter area={props.texts.sidebar} />
      </div>
      <div className="App-content">
        <h3>{props.texts.content}</h3>
        <Counter area={props.texts.content} />
      </div>
    </main>
  );
};

const Footer = props => {
  return (
    <footer className="App-footer">
      <h3>{props.texts.text} {props.texts.year}</h3>
        <Counter area={props.texts.text} />
    </footer>
  );
};

function App() {
  const componentTexts = {
    header: "Header",
    main: {
      sidebar: "Sidebar",
      content: "Content"
    },
    footer: {
      text: "Footer",
      year: "2019"
    }
  };

  return (
    <div className="App">
      <Header text={componentTexts.header} />
      <Main texts={componentTexts.main} />
      <Footer texts={componentTexts.footer} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));