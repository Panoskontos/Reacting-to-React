import React from "react";

// Using Hooks

const Counter = () => {
return (
    <div className="counter">
        <div className="counter__number">
            0
        </div>
        <div className="counter__buttons">
            <button className="counter__plus">
                +
            </button>
            <button className="counter__minus">
                -
            </button>
        </div>
    </div>
)
}

export default Counter