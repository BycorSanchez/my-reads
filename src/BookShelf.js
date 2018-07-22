import React, { Component } from "react";
import PropTypes from "prop-types";
import sortBy from 'sort-by';
import Book from "./Book";

class BookShelf extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render() {
        const { name, books } = this.props;

        //Sort books by title
        books.sort(sortBy("title"));

        return (
            <section className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {   //Create books to show 
                            books.map(book => (<li key={book.id}><Book book={book}/></li>))
                        }
                    </ol>
                </div>
            </section>
        );
    }
}

export default BookShelf;