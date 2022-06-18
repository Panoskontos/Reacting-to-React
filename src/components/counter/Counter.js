import React from "react";
import Button from "./Button";
import Number from "./Number";


// Hooks =  State -  Memory Card
import {useState} from "react"

// Effect - When to run
import { useEffect } from "react";

const Counter = () => {
    
    // console.log(useState(0))
    // initial points
    // function to change them
    const [points, setPoints] = useState(0)
    
    return (
    <div className="counter">
       
        <Number digit={points}/>
       
        <div className="counter__buttons">

            {/* pass hooks as props */}
            <Button class="counter__plus" setPoints={setPoints} points={points} value="plus">+</Button>
            <Button class="counter__minus" setPoints={setPoints} points={points} value="minus">-</Button>

       
        </div>

    </div>
)
}

export default Counter