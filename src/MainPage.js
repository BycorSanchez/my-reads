import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import BookShelf from "./BookShelf";
import { shelfTypes } from "./BooksAPI";

class MainPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired
    };

    // Categorize each book depending on its shelf value
    categorize = books => {
        // Map key: shelf key
        // Map values: books in that shelf
        let map = new Map();
        books.forEach(book => {
            const shelf = book.shelf;
            let books = map.has(shelf) ? map.get(shelf) : [];
            books.push(book);
            map.set(shelf, books);
        });
        return map;
    };

    render() {
        const { books, onShelfChange } = this.props;
        const bookShelves = this.categorize(books);

        return (
            <div className="list-books">
                <header className="list-books-title">
                    <h1>MyReads</h1>
                </header>
                <main className="list-books-content">
                    <div>
                        {   //Create BookShelf of every type, except if it does not have any book
                            shelfTypes
                                .filter(shelf => bookShelves.has(shelf.key))
                                .map(shelf => (
                                    <BookShelf
                                        key={shelf.key}
                                        name={shelf.label}
                                        books={bookShelves.get(shelf.key)}
                                        onShelfChange={onShelfChange}
                                    />
                                ))
                        }
                    </div>
                </main>
                <nav className="open-search">
                    <Link to="/search">Search</Link>
                </nav>
            </div>
        );
    };
}

export default MainPage;