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
    <>  

        {/* passing props */}
        <Heading content="Top Content" number={0} array={['','.','..']} object={{name:"panos",skill:"coding"}}/>
        <Heading content="My books" number={2} 
        // without () so it won't trigger
        printAlert={printAlert}/>
        <br />


        {/* children help when you want to pass diff html in the same comp*/}
        <Body background="black" width="300px">
        
        {/* Children */}
        <div>Logo</div>
        <nav>
            <a href="#">1</a>
            <br />
            <a href="#">2</a>
            <br />
            <a href="#">3</a>
        </nav>

        </Body> 
       
       
       
        <Body background="aqua" width="200px">
        
        {/* Children */}
        <div>Logo</div>
        <nav>
            <a href="#">1</a>
            <br />
            <a href="#">2</a>
        </nav>

        </Body> 

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
            
            {/* Button with my function 2 ways*/}
            {/* props */}
            <button onClick={props.printAlert==undefined ? null :props.printAlert.bind(null,"Hi")}>Press with Props</button>
            
            {/* Better - Function */}
            <button onClick={()=> props.printAlert("Hello")}>Press with function</button>
        </div>
    )
}


// Passing props to Children
const Body = (props) =>{
    return (
        <div style={{
            background:props.background,
            width:props.width,
            height:'200px',
            color:"white",
        }}>
            {props.children}
        </div>
    )
}


// Where to render
ReactDOM.render(<App/>, document.getElementById('root'))
