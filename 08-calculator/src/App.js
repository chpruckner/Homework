import React from 'react';
import './App.css';
import Keys from './components/Keyboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    }
    this.result = false
  }

  clear = () => {
    this.setState({
      display: ""
    });
  }

  output = (e) => {
/*     if (this.result) {
      this.result = false;
      this.setState({
        display: ""
      });
    } */
    let input = this.state.display;
    input += e.target.value;
    this.setState({
      display: input
    });
  }

  calculate = () => {
    let str = String(this.state.display);
    let x = eval(str);
    this.setState({
      display: x,
      result: true
    });
  }

  render() {
    return (
      <div className="App container mt-5">
        <input type="text" value={this.state.display} className="w-100" readOnly />
        <Keys output={this.output} clear={this.clear} calc={this.calculate} />
      </div>
    );
  }
}

export default App;
