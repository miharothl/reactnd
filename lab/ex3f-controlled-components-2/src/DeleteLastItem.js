import React, {Component} from "react";


class DeleteLastItem extends Component {

    deleteLastItem = () => {
        this.props.handleDeleteLastItem()
    }

    noItemsFound = () => {
        return this.props.handleNoItemFound()
    }

    render() {
        return (
            <div>
                <button onClick={this.deleteLastItem} disabled={this.noItemsFound()}>
                    Delete Last Item
                </button>
            </div>
        )
    }
}

export default DeleteLastItem;

