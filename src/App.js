import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => this.setState({ books }))
      .catch((error) => console.error("Failed to fetch books"));
  }

  render() {
    return (
      <div className="app">
        <Route exact to="/" render={() => (
          <div></div>
        )} />
        <Route to="/search" render={() => (
          <div></div>
        )}></Route>
      </div>
    )
  }
}

export default BooksApp
