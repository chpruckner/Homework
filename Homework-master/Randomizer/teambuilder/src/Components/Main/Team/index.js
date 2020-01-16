import React from 'react';
import Member from './Member'

import USER from '../../../Configs/const'

class Team extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          numberInput: "",    
          teams:false,
        }
        this.users = props.users
    }
    
    handleInput = e => {
      this.setState({
        numberInput: e.target.value
      });
    };

    handleRandom = (numberInput) => {
      let newUsers = this.users.slice();
      let teams = Math.floor(this.users.length/numberInput);
      let arr= [];
      newUsers.sort(() => Math.random() - 0.5); 
      console.log('shuffle', newUsers)
      let newUsers1 = newUsers.slice()

        for (let i = 0; i < teams; i++){
          let x = newUsers1.splice(0, numberInput)
          arr.push(x);
        }
        if (newUsers1.length > 0){
          for (let j = 0; j <= newUsers1.length; j++){
            arr[j].push(newUsers1.shift());
          }
        }
      
      this.setState ({
        teams: arr,
      })
      
      console.log('new arr',arr);
      
    }
    

    render(){
    return (
      <div className="App">
        <input type="text" className="form-control mb-2 mr-sm-2" id="searchInput" placeholder="Please enter # of Team members ..." onChange={this.handleInput} value={this.state.numberInput} />
        <button type="button" onClick={() => this.handleRandom(this.state.numberInput)}>form Teams</button>     
        {this.state.teams && <Member teams={this.state.teams} />}
      </div>
    );
    }
  }
  
  export default Team;