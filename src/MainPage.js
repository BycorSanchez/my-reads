import React, { Component } from "react";
import PropTypes from "prop-types";

class MainPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {
        return (
            <div></div>
        );
    }
}

export default MainPage;