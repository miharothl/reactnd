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
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event => this.updateQuery(event.target.value))}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResult.length > 0 && (
                            <div>
                                {this.state.searchResult.map(book => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onBookShelfChanged={this.props.onBookShelfChanged}
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