import React, {Component} from "react";
import {Link} from "react-router-dom";

import * as BooksAPI from './BooksAPI'
import Book from "./Book";


class SearchBooks extends Component {

    state = {
        searchResult: []
    }

    updateQuery = (query) => {
        if (query) {
            BooksAPI.search(query).then(response => {
                this.setState((currentState) => ({
                    searchResult: response
                }))
            })
        } else {
            this.setState((currentState) => ({
                searchResult: []
            }))
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">

                    <Link to='/' className="close-search">
                        <button>Close</button>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event => this.updateQuery(event.target.value))}
                        />
                    </div>
                </div>
                <div>
                    <ol>
                        {this.state.searchResult.length > 0 && (
                            <div className="books-grid">
                                {this.state.searchResult.map(book => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onBookShelfChanged={this.props.onBookShelfChanged}
                                                isBookOnShelf={this.props.isBookOnShelf}
                                            />
                                        </li>
                                    )
                                )}
                            </div>
                        )
                        }
                    </ol>
                </div>
            </div>

        )
    }
}

export default SearchBooks