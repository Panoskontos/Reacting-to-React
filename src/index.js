// importing react library
import React from 'react';
import ReactDOM from 'react-dom';

// Simple component
// Tecnhically Babel creates the html elements while using 
// as little as possible syntax


// Why jsx is the best!
// vars to change html
let name = "Panos";
let lname = "Kontos"
let age = 1996;

// you can input vars to change css wow 
let height = 200;
let mycss = {
    box:{
        background:"gold",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }
}


const App = () => {

    // function
const printAlert =(message) =>{
    alert(message)
}

return (
    <>  App

        {/* passing props */}
        <Heading content="Top Content" number={0} array={['','.','..']} object={{name:"panos",skill:"coding"}}/>
        <Heading content="My books" number={2} 
        // without () so it won't trigger
        printAlert={printAlert}/>

    </>
)
}

// const component
// add them as a parameter
const Heading = (props) => {
    console.log(props)
    return (
            // reading props
        <div>
            <h1>Header - {props.content} - {props.number==0 ? "No number was inputted": props.number}</h1>
            
            {/* Button with my function */}
            <button onClick={props.printAlert==undefined ? null :props.printAlert.bind(null,"Hi")}>Press</button>
        </div>
    )
}


// Where to render
ReactDOM.render(<App/>, document.getElementById('root'))
