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

  //Display all books
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(error => console.error("Failed to fetch books", error));
  }

  //Update book's shelf
  updateShelf = (book, shelf) => {

    BooksAPI.update(book, shelf).then(() => {
      this.setState(state => {
        const { books } = state;

        //Add book to list if not present
        if (!this.getBook(book.id))
          books.push(book);

        //Update book shelf
        this.syncBookShelf(book, shelf);

        return ({ books });
      });
    })
      .catch(error => console.error("Failed to update book shelf", error));
  }

  // Search for books that match a query
  searchBooks = query => {
    let booksFound = [];

    if (query.length > 0) {

      // Retrieve query data from API
      BooksAPI.search(query).then(data => {

        //Update booksFound, unless there is an error
        booksFound = data.error ? [] : data;

        //Update shelves
        this.syncShelf(booksFound);
        this.setState({ query, booksFound });
      })
        .catch(error => console.error("Search failed", error));
    }
    else {
      //Clear search
      this.setState({ query, booksFound });
    }
  };

  //Find a book from state books
  getBook = bookId => this.state.books.find(b => b.id === bookId);

  //Find book and update shelf
  syncBookShelf = (book, shelf) => {
    let current = this.getBook(book.id);
    if (current)
      current.shelf = shelf;
  }

  //Sync book shelves according to stored information
  syncShelf = books => {
    books.forEach(book => {
      let current = this.getBook(book.id);
      if (current)
        book.shelf = current.shelf;
    });
  }

  render() {
    const { books, booksFound, query } = this.state;

    // Display two pages
    //  - Main page (route "/"): it contains books categorized in shelves
    //  - Search page (route "/search"): it allows to find books
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
            query={query}
            onShelfChange={this.updateShelf}
            updateSearch={this.searchBooks}
          />
        )}></Route>
      </div>
    )
  }
}

export default BooksApp;