// importing react library
import React from 'react';
import ReactDOM from 'react-dom';

// Simple component
const App = () => {
    return (
    <div>
        <h1>Hello</h1>
    </div>
    )
}

// Where to render
ReactDOM.render(<App/>, document.getElementById('root'))
