import React, { Component } from "react";
import PropTypes from "prop-types";

class BookShelf extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render() {
        return (
            <div></div>
        );
    }
}

export default BookShelf;