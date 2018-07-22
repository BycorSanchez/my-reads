import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SearchBar extends Component {
    static propTypes = {
        updateSearch: PropTypes.func.isRequired
    }

    render() {
        let timeout;
        const { updateSearch } = this.props;

        return (
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        //onChange={(event) => updateSearch(event.target.value)}
                        onChange={ (event) => {
                            const value = event.target.value;

                            clearTimeout(timeout);

                            // Make a new timeout set to go off in 800ms
                            timeout = setTimeout(function () {
                                updateSearch(value);
                            }, 500);
                        
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;