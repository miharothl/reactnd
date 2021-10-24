import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////////////////
// 8. people using map and JSX using component - step 2

class ContactList extends React.Component {
    render()
    {
        const people = this.props.contacts

        return <ol>
            {people.map(person => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                 <ContactList contacts={[
                    {name: 'Tyler'},
                    {name: 'Karen'},
                    {name: 'Richard'},
                ]} />
                <ContactList contacts={[
                    {name: 'Matthew'},
                    {name: 'Nathan'},
                    {name: 'Chris'},
                    {name: 'Hannah'},
                ]} />
            </div>
        );
    }
}

export default App;
