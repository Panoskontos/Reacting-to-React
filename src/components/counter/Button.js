import React from "react";

const Button = (props) => {


    if (props.points == props.goal){
    alert("You won")
    props.setGoal(props.points*2)
}
    //  using hook to change state
    const clicked = () =>{
        console.log("God damn")
        if (props.value=="plus"){
            props.setPoints(props.points+1)
        } else {
            props.setPoints(props.points-1)
        }
    }


    // syntetic events
    const mouseEnters =()=>{
        console.log("mouse went on top")
    }

    const mouseLeft =()=>{
        console.log("mouse left")
    }

return (
            <button className={props.class}
            onClick={clicked}
        
            // synthetic events
            onMouseEnter={mouseEnters}
            onMouseLeave={mouseLeft}
            >
                {props.children}
            </button>
)
}

export default Button