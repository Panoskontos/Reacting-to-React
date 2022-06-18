import React from "react";

const Button = (props) => {

    const clicked = () =>{
        console.log("God damn")
    }


return (
            <button className={props.class}
            onClick={clicked}
            >
                {props.children}
            </button>
)
}

export default Button