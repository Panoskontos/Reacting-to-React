import { Component } from "react";
import {StateContext} from "../context/ClassProvider"

class B extends Component {
    state = {  } 
    render() { 
        return (
             
                <div style={
                    {
                    background:'blue',
                    width:'200px',
                    height:'100px',
                    color:'white',
                }
                }>
                    {/* Adding A as a consumer */}
                    <StateContext.Consumer>
                    {(context)=>(
                        <h2>Bye: {context.name}</h2>
                    )}
                
                    </StateContext.Consumer>
                </div>
             
        );
    }
}
 
export default B;