import React, {Component} from "react";
import {PropTypes} from "react";
import {Link} from "react-router-dom";

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }


    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        console.log('Props', this.props)

        const {query} = this.state
        const {contacts, onDeleteContact} = this.props

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))


        return (
            <div className='list-contacts'>
                {JSON.stringify(this.state)}
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'

                        // value={this.state.query}
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    {/*<a href='#create'*/}
                    {/*   onClick={() => onNavigate() }*/}
                    {/*   className='add-contact'*/}
                    {/*   >Add Contact</a>*/}

                    <Link
                        to='/create'
                        className='add-contact'>
                        Add Contact
                    </Link>
                </div>
                <div>
                    {showingContacts.length !== contacts.length && (
                        <div className='showing-contacts'>
                            <span>Now showing {showingContacts.length} of {contacts.length}</span>
                            <button onClick={this.clearQuery}>Show all</button>
                        </div>
                    )}
                </div>

                <ol className='contact-list'>
                    {showingContacts.map(contact => (
                        <li key={contact.id} className='contact-list-item'>
                            <div
                                className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

        );
    }
}


// const ListContacts = props => {
//
//     console.log('Props', props)
//     return (
//         <ol className='contact-list'>
//             {props.contacts.map(contact => (
//                 <li key={contact.id} className='contact-list-item'>
//                     <div
//                         className='contact-avatar'
//                         style={{
//                             backgroundImage: `url(${contact.avatarURL})`
//                         }}
//                     ></div>
//                     <div className='contact-details'>
//                         <p>{contact.name}</p>
//                         <p>{contact.handle}</p>
//                     </div>
//                     <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
//                         Remove
//                     </button>
//                 </li>
//             ))}
//         </ol>
//     );
// }
//
// ListContacts.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// }


export default ListContacts