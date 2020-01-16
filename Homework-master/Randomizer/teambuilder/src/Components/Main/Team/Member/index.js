import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
        IMG
    } from '../../../../Configs/const';

const ListContainer = (props) => {
    const teams = props.team;
    const teamContainer = teams.map(team => ( <Lists teams={team} /> ))
    return <div>{teamContainer}</div>;
  };

  const Lists = (props) => {
    const team = props.teams;
    const listItems = team.map(team => (
      <ListItem key={team.id} id={team.id} name={team.name} present={team.active} />
    ));
    return <div className="row my-4 border border-warning">{listItems}</div>;
  };

  const ListItem = (props) => {
    const { id, name, present } = props;

    return ( 
      <div className="card-wrapper col-md-4 p-2 d-flex align-items-stretch">
        <div className="card mb-3 p-3" id={id}>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
            <img src= {IMG} />
            </div>
            <div className="col-md-9 d-flex flex-column align-itmes-stretch">
              <div className="card-body text-left pt-0">
                <h5 className="card-title">{name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

class Member extends React.Component {
    constructor(props){
      super(props);
      
    }
    
    render(){
    return (
        <>
      <ListContainer team={this.props.teams} />
      
      </>
    );
    }
  }

  export default Member;