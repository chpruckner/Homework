import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {IMG} from "../../../configs/constants";

const ListContainer = (props) => {
    return <Lists user={props.user} setPresent={props.setPresent}/>;
};

const Lists = (props) => {
    const users = props.user;
    const listItems = users.map(user => (
        <ListItem key={user.id} id={user.id} name={user.name} present={user.active} setPresent={props.setPresent} />
    ));
    return <div className="row my-4">{listItems}</div>;
};

const ListItem = (props) => {
    const { id, name, present } = props;
    return ( 
        <div className="card-wrapper col-md-4 p-2 d-flex align-items-stretch">
        <div className="card mb-3 p-3" id={id}>
            <div className="row">
            <div className="col-md-2 d-flex align-items-center">
            <img src={IMG} />
            </div>
            <div className="col-md-9 d-flex flex-column align-itmes-stretch">
                <div className="card-body text-left pt-0">
                <h5 className="card-title">{name}</h5>
                <input type="checkbox" onClick={() => props.setPresent()} />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

class Admin extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }

    render() {
        return (
            <>
                <ListContainer user={this.props.users} setPresent={this.props.setPresent} />
                {console.log(this.props.users)}
            </>
        );
    }
  }

  export default Admin;