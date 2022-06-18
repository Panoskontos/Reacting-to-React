import React from "react";

const Button = (props) => {

    // using hook to change state
    const clicked = () =>{
        console.log("God damn")
        if (props.value=="plus"){
            props.setPoints(props.points+1)
        } else {
            props.setPoints(props.points-1)
        }
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