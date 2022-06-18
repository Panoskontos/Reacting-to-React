import React from "react";

// a file we can export and reuse
const Button = (props) => {
    // let buttonRef = React.createRef();
    let clickMe = () => {
        console.log("God Damn");
        
    }

    return(
        <button
        // ref={buttonRef}
        // using DOM in react
        onClick={clickMe}
        id="button"
        style={{
            color:"white",
            background:"blue",
            border:'None',
            width:"300px",
            height:"60px",
            borderRadius:"20px",
            fontSize:'1.3rem',
        }}
        >
            {props.children}
        </button>
    )
}

export default Button