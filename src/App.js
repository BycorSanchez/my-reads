import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => this.setState({ books }))
      .catch((error) => console.error("Failed to fetch books", error));
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState(state => ({
          //Seach in old state
          books: state.books.filter(b => {
            //Find book by id & update shelf
            return (b.id === book.id) ? (book.shelf = shelf) : book;
          })
        }));
      })
      .catch((error) => console.error("Failed to update book shelf", error));
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
            onShelfChange={this.updateShelf}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            onShelfChange={this.updateShelf}
          />
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
