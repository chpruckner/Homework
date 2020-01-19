import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ""
        }
    }

    handleOnChange = (e) => {
        let input = e.target.value;
        this.setState({
            searchInput: input
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        //console.log(e);

        this.props.search(this.state.searchInput);
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.handleOnSubmit} >
                    <div className="form-group">
                        <label htmlFor="searchinput" className="sr-only">Search...</label>
                        <input 
                            type="text" 
                            value={this.state.searchInput} 
                            onChange={this.handleOnChange} 
                            className="form-control" 
                            placeholder="Search..." 
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default Search;