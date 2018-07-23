import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import SearchBar from "./SearchBar";

class SearchPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        query: PropTypes.string.isRequired,
        onShelfChange: PropTypes.func.isRequired,
        updateSearch: PropTypes.func.isRequired
    };

    render() {
        const { books, query, onShelfChange, updateSearch } = this.props;

        return (
            <main className="search-books">
                <SearchBar updateSearch={updateSearch}/>

                <div className="search-books-results">
                    {
                        query && 
                        (<div className="search-books-info">{books.length > 0 ? `${books.length} books found`: "No books found"} </div>)
                    }
                    
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