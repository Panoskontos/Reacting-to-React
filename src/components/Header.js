import React from "react";


const Header = (props) => {
    return (
       // reading props
       <div>
       <h1>Header - {props.content} - {props.number==0 ? "No number was inputted": props.number}</h1>
       {/* Button with my function 2 ways*/}
   </div>

    )
}

export default Header