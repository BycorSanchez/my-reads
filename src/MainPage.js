import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class MainPage extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    //Translate shelf key to a proper label
    shelfLabel = (shelfKey) => {
        switch (shelfKey) {
            case "currentlyReading":
                return "Currently Reading";
            case "wantToRead":
                return "Want to Read";
            case "read":
                return "Read";
            default:
                return "Other";
        }
    };

    // Categorize each book depending on its shelf value
    categorize = (books) => {
        // Map key: shelf key
        // Map values: books in that shelf
        let map = new Map();
        books.forEach(book => {
            const shelf = book.shelf;
            let books = (map.has(shelf)) ? map.get(shelf) : [];
            books.push(book);
            map.set(shelf, books);
        });
        return map;
    };

    render() {
        const { books } = this.props;
        const bookShelves = this.categorize(books);

        return (
            <div className="list-books">
                <header className="list-books-title">
                    <h1>MyReads</h1>
                </header>
                <main className="list-books-content">
                    <div>
                        {   //Map shelf to BookShelf component, giving it a name and the books it contains
                            Array.from(bookShelves).map(([shelfKey, books]) =>
                                <BookShelf key={shelfKey} name={this.shelfLabel(shelfKey)} books={books} />
                            )
                        }
                    </div>
                </main>
                <nav className="open-search">
                    {/* TODO Link to search page */}
                </nav>
            </div>
        );
    };
}

export default MainPage;