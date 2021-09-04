import React, {Component} from "react";

class CreateNewItem extends Component {

    state = {
        value: '',
    }

    addItem = (event) => {
        event.preventDefault();
        console.log(`adding ${this.state.value} `)
        this.props.handleAddItem(this.state.value)
    }

    handleChange = (event) => {
        this.setState( { value: event.target.value})
    }

    inputIsEmpty = () => {
        const isEmpty = this.state.value === '';
        console.log(isEmpty)
        return isEmpty
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button type='submit' disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </div>
        )
    }
}

export default CreateNewItem