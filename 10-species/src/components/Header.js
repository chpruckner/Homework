import React from "react";

class Header extends React.Component {

    render() {
        return(
            <header className="bg-dark d-flex text-light p-4 justify-content-between">
                <div className="align-items-baseline">
                    <h4>Region:</h4><span>{this.props.region}</span>
                </div>
                <div>
                    <button className="btn btn-secondary mr-3" type="button" onClick={() => this.props.onclick("all")}>All of Region</button>
                    <button className="btn btn-success mr-3" type="button" onClick={() => this.props.onclick("mammal")}>Mammals</button>
                    <button className="btn btn-danger" type="button" onClick={() => this.props.onclick("cr")}>Critical Endangered</button>
                </div>
            </header>
        );
    }
}

export default Header;