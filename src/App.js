import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    booksFound: [],
    query: "",
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => this.setState({ books }))
      .catch((error) => console.error("Failed to fetch books", error));
  }

  updateShelf = (book, shelf) => {
    
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState(state => {
          const newBooks = state.books;

          //Add book if not present on the list
          if (!this.hasBook(book))
            newBooks.push(book);

          //Update book shelf
          newBooks.filter(b => (b.id === book.id) ? (book.shelf = shelf) : book);

          return ({ books: newBooks });
        });
      })
      .catch((error) => console.error("Failed to update book shelf", error));
  }

  searchBooks = query => {
    if (query.length > 0) {
      // Retrieve query data from API
      BooksAPI.search(query).then(data => {
      	//Update booksFound state, unless there is an error
      	const booksFound = data.error? [] : data;
        this.setState({ booksFound });
      })
      .catch((error) => console.error("Search failed", error));
    }
  };

  hasBook = (book) => this.state.books.some(b => b.id === book.id);

  render() {
    const { books, booksFound } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            books={books}
            onShelfChange={this.updateShelf}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            books={booksFound}
            onShelfChange={this.updateShelf}
            updateSearch={this.searchBooks}
          />
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
