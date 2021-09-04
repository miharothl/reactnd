import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewItem from "./CreateNewItem";
import DeleteLastItem from "./DeleteLastItem";
import ItemList from "./ItemList";

class App extends React.Component {
    state = {
        items: [],
    };

   handleAddItem = (item) => {
        this.setState(oldState => (
            {items: [...oldState.items, item]}
        ))
    }

    handleDeleteLastItem = event => {
        this.setState(prevState => ({items: this.state.items.slice(0, -1)}));
    };

    handleNoItemsFound = () => {
        return this.state.items.length === 0;
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>

                <h2>Shopping List</h2>

                <CreateNewItem
                    handleAddItem={this.handleAddItem}
                />

                <DeleteLastItem
                    handleNoItemFound={this.handleNoItemsFound}
                    handleDeleteLastItem={this.handleDeleteLastItem}
                />

                <ItemList
                    items={this.state.items}
                />
            </div>
        );
    }
}

export default App;
