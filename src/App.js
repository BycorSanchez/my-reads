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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage books={this.state.books} />
        )} />
        <Route path="/search" render={() => (
          <SearchPage books={this.state.books} />
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
