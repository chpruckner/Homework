import React from 'react';
import './index.css';

import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";


class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentPage: 1
        }        
    }

    changeCurrentPage = numPage => {
        this.setState({ currentPage: numPage });}


    render(){
        return( <footer className="App-footer">
                    <Pagination
                        currentPage={this.state.currentPage}
                        totalSize={10}
                        sizePerPage={20}
                        changeCurrentPage={this.changeCurrentPage}
                        theme="bootstrap"
                        />
                </footer>);
    }
}

export default Footer;