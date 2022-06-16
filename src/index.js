// importing react library
import React from 'react';
import ReactDOM from 'react-dom';

// Simple component
// Tecnhically Babel creates the html elements while using 
// as little as possible syntax

// vars to change html
let name = "Panos";
let lname = "Kontos"
let age = 1996;

// you can input vars to change css wow 
let height = 200;


const App = () => {

    // simple function
    let showAccount = () => {
        return (
            <div style={
                    // Writing css in React
                {background: 'blue',
                 color: 'white',
                width: '400px',
                height: `${height}px`    
            }
                }>
                Account Component
            </div>
        )
    }

    return (
    <div>

    <h2>Welcome {name + ' ' +lname} {2022-age}</h2>
    <br />
    <h2>What is your next move</h2>
    <br />
    
    {/* trigger function */}
    {showAccount()}


    </div>
    )
}

// Where to render
ReactDOM.render(<App/>, document.getElementById('root'))
