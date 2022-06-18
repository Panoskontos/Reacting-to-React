import React from "react";
import Button from "./Button";
import Number from "./Number";


// Hooks =  State -  Memory Card
import {useState} from "react"

// Effect - Use function when something changes
// Triggers when components render,change in the data
// Almost every time
import { useEffect } from "react";

const Counter = () => {
    // console.log(useState(0))
    // initial points
    // function to change them
    const [points, setPoints] = useState(0)

    const [goal,setGoal] = useState(11)

    // console.log(useEffect)
    useEffect(()=>{
        console.log("Run")
        console.log("A")
    }, [])
    // [] means run 1 time only first render
   
    useEffect(()=>{
        console.log("Run")
        console.log("B")
    }, [goal])
    // goal means run when goal changes

    // So you can run functions when there is a change in data
    

    return (
    <div className="counter">
       
        <Number digit={points}/>
       
        <div className="counter__buttons">

            {/* pass hooks as props */}
            <Button class="counter__plus" setPoints={setPoints} points={points} goal={goal} setGoal = {setGoal} value="plus">+</Button>
            <Button class="counter__minus" setPoints={setPoints} points={points} goal={goal} setGoal = {setGoal} value="minus">-</Button>


        </div>

        Goal : {goal}

    </div>
)
}

export default Counter