import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import SearchBar from "./SearchBar";

class SearchPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired,
        updateSearch: PropTypes.func.isRequired
    };

    render() {
        const { books, onShelfChange, updateSearch } = this.props;

        return (
            <main className="search-books">
                <SearchBar 
                    updateSearch={updateSearch}
                />
                <div className="search-books-results">
                    <ol className="books-grid">
                        {   
                            books.map(book =>
                                <li key={book.id}>
                                    <Book
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
    };
}

export default SearchPage;