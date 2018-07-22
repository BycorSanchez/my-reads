import React, { Component } from "react";
import PropType from 'prop-types';
import { shelfTypes } from "./BooksAPI";

class Book extends Component {
    static propTypes = {
        book: PropType.object.isRequired
    };

    render() {
        const { book } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <img src={book.imageLinks.thumbnail} alt={book.title} className="book-cover" />
                    <div className="book-shelf-changer">
                        <select defaultValue={book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            {   //Create options according to shelves
                                shelfTypes.map(({ key, label }) => (
                                    <option
                                        key={key}
                                        value={key}
                                    >{label}</option>
                                ))
                            }
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <h3 className="book-title">{book.title}</h3>

                { // Display each author in a new line
                    book.authors.map(author => (<p key={author} className="book-authors">{author}</p>))
                }
            </div>
        );
    }
}

export default Book;