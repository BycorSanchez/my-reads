import React, { Component } from "react";
import PropType from 'prop-types';

class Book extends Component{
    static propTypes = {
        book: PropType.object.isRequired
    };

    render(){
        return (
            <div className="book"></div>
        );
    }
}

export default Book;