import React from "react";

// a file we can export and reuse
const Button = (props) => {
    return(
        <button
        id="button"
        style={{
            color:"white",
            background:"blue",
            border:'None',
            width:"300px",
            height:"60px",
            borderRadius:"20px"
        }}
        >
            {props.children}
        </button>
    )
}

export default Button