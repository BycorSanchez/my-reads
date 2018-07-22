import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Book from "./Book";

class SearchPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    render() {
        const { books } = this.props;

        return (
            <main className="search-books">
                <div className="search-books-results">
                    <ol className="books-grid">
                        {   //Display all books
                            books.map(book => 
                                <li><Book key={book.id} book={book} /></li>
                            )
                        }
                    </ol>
                </div>
            </main>
        );
    }
}

export default SearchPage;