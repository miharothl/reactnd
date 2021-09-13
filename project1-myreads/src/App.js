import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from "./BookShelf";
import {Link, Route} from "react-router-dom";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {

    state = {
        currentlyReading: [],
        read: [],
        wantToRead: [],
    }

    componentDidMount() {

        BooksAPI.getAll().then(books => {
            this.setState(() => ({
                currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
                read: books.filter(book => book.shelf === 'read'),
                wantToRead: books.filter(book => book.shelf === 'wantToRead'),
            }))
        });

        // BooksAPI.search('Android').then(res => console.log(res))
        //
        // BooksAPI.get('tsRhkvo80iUC').then(
        //     res => {
        //         console.log(res)
        //     })
        //
        // const book = {'id': 'tsRhkvo80iUC'}
        // BooksAPI.update(book, 'read').then(r => console.log(r))
        //
        //
        // BooksAPI.getAll().then(res => console.log(res));
        //
        // BooksAPI.update(book, 'read').then(r => {
        //     console.log(r)
        // })
    }

    render() {

        return (
            <div className="app">
                <Route exact path='/search' render={() => (
                    <SearchBooks />
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
                                    books={this.state.currentlyReading}
                                />
                                <BookShelf
                                    title={'Want to Read'}
                                    books={this.state.wantToRead}
                                />
                                <BookShelf
                                    title={'Read'}
                                    books={this.state.read}
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
