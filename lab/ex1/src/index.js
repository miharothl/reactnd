import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

////////////////////////////////////////////////////////////////////////////////
// 1. default
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

////////////////////////////////////////////////////////////////////////////////
// 2. hello world
// const element = React.createElement('div', null, 'hello world')

////////////////////////////////////////////////////////////////////////////////
// 3. hello world nested
// const element = React.createElement('div', null,
//     React.createElement('strong', null, 'hello world')
// )

////////////////////////////////////////////////////////////////////////////////
// 4. people
// const element = React.createElement('ol', null,
//     React.createElement('li', null, 'Tyler'),
//     React.createElement('li', null, 'Karen'),
//     React.createElement('li', null, 'Richard')
// )

////////////////////////////////////////////////////////////////////////////////
// 5. people using map
// const people = [
//     { name: 'Tyler'},
//     { name: 'Karen'},
//     { name: 'Richard'}
// ]
//
// const element = React.createElement('ol', null,
//     people.map(person => (
//        React.createElement('li', null, person.name)
//     )),
//     React.createElement('li', null, 'Tyler'),
//     React.createElement('li', null, 'Karen'),
//     React.createElement('li', null, 'Richard')
// )

////////////////////////////////////////////////////////////////////////////////
// 6. people using map and JSX - step 1
// const people = [
//     { name: 'Tyler'},
//     { name: 'Karen'},
//     { name: 'Richard'},
// ]
//
// const element = <ol>
//     <li>people[0].name</li>
// </ol>

////////////////////////////////////////////////////////////////////////////////
// 6. people using map and JSX - step 2
// const people = [
//     { name: 'Tyler'},
//     { name: 'Karen'},
//     { name: 'Richard'},
// ]
//
// const element = <ol>
//     {people.map(person => (
//         <li>{person.name}</li>
//     ))}
// </ol>
//
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )


////////////////////////////////////////////////////////////////////////////////
// 7. people using map and JSX using component
//
// class ContactList extends React.Component {
//     render()
//     {
//         const people = [
//             { name: 'Tyler'},
//             { name: 'Karen'},
//             { name: 'Richard'},
//         ]
//
//         const element = <ol>
//             {people.map(person => (
//                 <li>{person.name}</li>
//             ))}
//         </ol>
//
//         return;
//     }
// }
//
// ReactDOM.render(
//     <ContactList />,
//     document.getElementById('root')
// )


// ReactDOM.render(
//     <ContactList />,
//     document.getElementById('root')
// )

////////////////////////////////////////////////////////////////////////////////
// 8. people using map and JSX using component - step 2

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
