import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from "./BookShelf";
import {Link, Route} from "react-router-dom";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {

    state = {
        books: [],
    }

    onBookShelfChanged = (shelf, book) => {
        BooksAPI.update(book, shelf).then(response => {
            book.shelf = shelf

            this.setState((currentState) => ({
                    books: currentState.books.filter((b) => b.id !== book.id).concat(book)
                })
            )
        })
    }

    isBookOnShelf = (book) => {
        if (book.shelf)
            return book.shelf

        const bookOnShelf = this.state.books.find((b) => b.id === book.id)
        if (bookOnShelf)
            return bookOnShelf.shelf

        return 'none'
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState(() => ({
                books: books,
            }))
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <SearchBooks
                        onBookShelfChanged={this.onBookShelfChanged}
                        isBookOnShelf={this.isBookOnShelf}
                    />
                )}/>
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <BookShelf
                                    title={'Currently Reading'}
                                    books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                                    onBookShelfChanged={this.onBookShelfChanged}
                                    isBookOnShelf={this.isBookOnShelf}
                                />
                                <BookShelf
                                    title={'Want to Read'}
                                    books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                                    onBookShelfChanged={this.onBookShelfChanged}
                                    isBookOnShelf={this.isBookOnShelf}
                                />
                                <BookShelf
                                    title={'Read'}
                                    books={this.state.books.filter(book => book.shelf === 'read')}
                                    onBookShelfChanged={this.onBookShelfChanged}
                                    isBookOnShelf={this.isBookOnShelf}
                                />

                            </div>
                        </div>
                        <div className="open-search">
                            <Link to='/search' className="open-search">
                                <button>Add a book</button>
                            </Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
