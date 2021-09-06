import React, {Component} from 'react';
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'

import * as ContactsApi from './utils/ContactsAPI'

// const contacts = [
//  {
//    "id": "karen",
//    "name": "Karen Isgrigg",
//    "handle": "karen_isgrigg",
//    "avatarURL": "http://localhost:5001/karen.jpg"
//  },
//  {
//    "id": "richard",
//    "name": "Richard Kalehoff",
//    "handle": "richardkalehoff",
//    "avatarURL": "http://localhost:5001/richard.jpg"
//  },
//  {
//    "id": "tyler",
//    "name": "Tyler McGinnis",
//    "handle": "tylermcginnis",
//    "avatarURL": "http://localhost:5001/tyler.jpg"
//  }
// ];

class App extends Component {

    // state = {
    //     contacts: [
    //         {
    //             "id": "karen",
    //             "name": "Karen Isgrigg",
    //             "handle": "karen_isgrigg",
    //             "avatarURL": "http://localhost:5001/karen.jpg"
    //         },
    //         {
    //             "id": "richard",
    //             "name": "Richard Kalehoff",
    //             "handle": "richardkalehoff",
    //             "avatarURL": "http://localhost:5001/richard.jpg"
    //         },
    //         {
    //             "id": "tyler",
    //             "name": "Tyler McGinnis",
    //             "handle": "tylermcginnis",
    //             "avatarURL": "http://localhost:5001/tyler.jpg"
    //         }
    //     ]
    // }


    state = {
        contacts: [],
        screen: 'list',
    }


    componentDidMount() {
        ContactsApi.getAll().then((contacts) => {
            this.setState(() => ({
                contacts
            }))
        })
    }


    removeContact = (contact) => {
        this.setState((currentState) => ({
            contacts: currentState.contacts.filter((c) => {
                return c.id !== contact.id
            })
        }))
        ContactsApi.remove(contact);
    }

    render() {
        return (
            <div>
                {
                    this.state.screen === 'list' && (
                        <ListContacts
                            contacts={this.state.contacts}
                            onDeleteContact={this.removeContact}
                            onNavigate={() => {
                                this.setState(() => ({
                                    screen:'create'
                                }))
                            }}
                        />
                    )
                }
                {
                    this.state.screen === 'create' && (
                        <CreateContact/>
                    )
                }

            </div>
        )
    }
}

export default App;
