import React, { Component } from "react";
import PropType from 'prop-types';
import { shelfTypes } from "./BooksAPI";

class Book extends Component {
    static propTypes = {
        book: PropType.object.isRequired,
        onShelfChange: PropType.func.isRequired
    };

    render() {
        const { book, onShelfChange } = this.props;

        return (
            <div className="book">
                <div className="book-top">
                    {   //Show thumbnail
                        book.imageLinks &&
                        (<img src={book.imageLinks.thumbnail} alt={book.title} className="book-cover" />)
                    }
                    {   //Show a placeholder if thumbnail is not available
                        !book.imageLinks &&
                        (<div className="book-cover-placeholder">No Preview</div>)
                    }
                    <div className="book-shelf-changer">
                        <select
                            defaultValue={book.shelf? book.shelf : "none"}
                            onChange={event => onShelfChange(book, event.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            {   //Display shelf options
                                shelfTypes.map(({ key, label }) => (
                                    <option
                                        key={key}
                                        value={key}
                                    >{label}</option>
                                ))
                            }
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <h3 className="book-title">{book.title}</h3>

                {   // Display authors in different lines
                    book.authors &&
                    book.authors.map(author => (<p key={author} className="book-authors">{author}</p>))
                }
            </div>
        );
    }
}

export default Book;