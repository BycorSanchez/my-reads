import React, { Component } from "react";
import PropType from 'prop-types';

class Book extends Component{
    static propTypes = {
        book: PropType.object.isRequired
    };

    render(){
        const { book } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <img src={book.imageLinks.thumbnail} alt={book.title} className="book-cover"/>
                </div>
                <h3 className="book-title">{book.title}</h3>
                { book.authors.map(author => (<p key={author} className="book-authors">{author}</p>))}
            </div>
        );
    }
}

export default Book;