import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import SearchBar from "./SearchBar";

class SearchPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };

    render() {
        const { books, onShelfChange } = this.props;

        return (
            <main className="search-books">
                <SearchBar />
                <div className="search-books-results">
                    <ol className="books-grid">
                        {   //Display all books
                            books.map(book =>
                                <li>
                                    <Book
                                        key={book.id}
                                        book={book}
                                        onShelfChange={onShelfChange}
                                    />
                                </li>
                            )
                        }
                    </ol>
                </div>
            </main>
        );
    }
}

export default SearchPage;