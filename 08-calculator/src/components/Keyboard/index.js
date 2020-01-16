import React from 'react';

class Keys extends React.Component {
    

    render() {
        return(
            <div>
                <div className="row no-gutters">
                    <button 
                        className="col-3 rounded-0 border border-dark bg-dark text-white" 
                        onClick={this.props.clear}>C</button>
                    <div className="col-6 rounded-0 border border-dark bg-dark text-white"></div>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-warning text-white" 
                        onClick={this.props.output} 
                        value="/">/</button>
                </div>
                <div className="row no-gutters">
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="7">7</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="8">8</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="9">9</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-warning text-white" 
                        onClick={this.props.output} 
                        value="*">x</button>
                </div>
                <div className="row no-gutters">
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="4">4</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="5">5</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="6">6</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-warning text-white" 
                        onClick={this.props.output} 
                        value="-">-</button>
                </div>
                <div className="row no-gutters">
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="1">1</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="2">2</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="3">3</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-warning text-white" 
                        onClick={this.props.output} 
                        value="+">+</button>
                </div>
                <div className="row no-gutters">
                    <button 
                        className="btn col-6 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value="0">0</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-secondary text-white" 
                        onClick={this.props.output} 
                        value=".">,</button>
                    <button 
                        className="btn col-3 rounded-0 border border-dark bg-warning text-white" 
                        onClick={this.props.calc} 
                        value="=">=</button>
                </div>
            </div>
        );
    }
}

export default Keys;