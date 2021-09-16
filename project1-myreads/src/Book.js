import React, {Component} from "react";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    render() {
        const {book} = this.props

        const imageLink = book.imageLinks && book.imageLinks.thumbnail
                ? book.imageLinks.thumbnail
                : null;

        const title = book.title ? book.title : 'No title available';

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${imageLink})`
                    }}></div>
                    <BookShelfChanger
                        book={book}
                        onBookShelfChanged={this.props.onBookShelfChanged}
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

export default Book
