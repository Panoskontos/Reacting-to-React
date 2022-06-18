import React from "react";
import Button from "./Button";
import Number from "./Number";

// Use Hooks


const Counter = () => {
return (
    <div className="counter">
       
        <Number/>
       
        <div className="counter__buttons">

            <Button class="counter__plus">+</Button>
            <Button class="counter__minus">-</Button>

       
        </div>

    </div>
)
}

export default Counter