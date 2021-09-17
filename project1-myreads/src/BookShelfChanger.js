import React, {Component} from "react";

class BookShelfChanger extends Component {

    handleChange = (e) => {
        if (this.props.onBookShelfChanged) {
            this.props.onBookShelfChanged(e.target.value, this.props.book)
        }
    }

    render() {
        return (
            <div>
                <div className="book-shelf-changer">
                    <select onChange={this.handleChange} defaultValue={this.props.isBookOnShelf(this.props.book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default BookShelfChanger