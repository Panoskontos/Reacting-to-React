import React from "react";

// a file we can export and reuse
export default function(props){
    return(
        <div>
            {props.children}
        </div>
    )
}