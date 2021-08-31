import React, {Component} from "react";
import {PropTypes} from "react";

// class ListContacts extends Component {
//     render() {
//
//         console.log('Props', this.props)
//         return (
//             <ol className='contact-list'>
//                 {this.props.contacts.map(contact => (
//                     <li key={contact.id} className='contact-list-item'>
//                         <div
//                             className='contact-avatar'
//                             style={{
//                                 backgroundImage: `url(${contact.avatarURL})`
//                             }}
//                        ></div>
//                         <div className='contact-details'>
//                             <p>{contact.name}</p>
//                             <p>{contact.handle}</p>
//                         </div>
//                         <div className='contact-remove'>
//                             Remove
//                         </div>
//                     </li>
//                     ))}
//             </ol>
//         );
//     }
// }


const ListContacts = props => {

    console.log('Props', props)
    return (
        <ol className='contact-list'>
            {props.contacts.map(contact => (
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
                    <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
                        Remove
                    </button>
                </li>
            ))}
        </ol>
    );
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}


export default ListContacts