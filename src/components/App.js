import React, {Component} from "react";
import { GlobalState, StateContext } from "../context/ClassProvider";
import A from "../context/A";

const App =()=>{
    return(
        <div>
            {/* setting global memory */}
            <GlobalState>
                {/* add App as a consumer */}
                <StateContext.Consumer>
                    {
                    context => {
                        return(
                            <>
                            <h1>Name: {context.name}</h1>
                            
                            <A/> 

                            </>
                        )}
                    }
                </StateContext.Consumer>
            </GlobalState>
        </div>
    )
}

export default App