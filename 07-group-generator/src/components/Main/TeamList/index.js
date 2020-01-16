import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Team from "./Team";

class TeamList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <button type="button">Generate Teams</button>
                <Team users={this.props.users} />
            </>
        );
    }
}

export default TeamList;