import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SearchBar extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        updateSearch: PropTypes.func.isRequired
    }

    render() {
        let timeout;
        const { query, updateSearch } = this.props;

        return (
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        defaultValue={query}
                        onChange={(event) => {
                            const value = event.target.value;

                            // Clear previous timeout because user typed again
                            clearTimeout(timeout);

                            // Set 300ms timeout before actually search
                            timeout = setTimeout(function () {
                                updateSearch(value);
                            }, 300);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;