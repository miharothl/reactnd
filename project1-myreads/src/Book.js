import React, {Component} from "react";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {

    render() {
        const {name, authors, link} = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${link})`
                    }}></div>
                    <BookShelfChanger/>
                </div>
                <div className="book-title">{name}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book
