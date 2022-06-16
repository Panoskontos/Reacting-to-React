// importing react library
import React from 'react';
import ReactDOM from 'react-dom';

// Simple component
// Tecnhically Babel creates the html elements while using 
// as little as possible syntax

// vars
let name = "Panos";
let lname = "Kontos"
let age = 1996;

const App = () => {
    return (<h2>Welcome {name + ' ' +lname} {2022-age}</h2>)
}

// Where to render
ReactDOM.render(<App/>, document.getElementById('root'))
