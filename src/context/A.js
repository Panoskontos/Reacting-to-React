import { Component } from "react";
import {StateContext} from "../context/ClassProvider"
import B from "./B";


class A extends Component {
    constructor(props){
        super(props)
    }
    state = {  }
    render() { 
        return ( 
            <div style={
                {
                background:'grey',
                width:'200px',
                height:'300px',
                color:'white',
            }
            }>
                {/* Adding A as a consumer */}
                <StateContext.Consumer>
                {(context)=>(
                    <div>

                    <h2>Hello: {context.name}</h2>
                    
                    <B/>
                    </div>
                    
                    )}
            
                </StateContext.Consumer>
            </div>
         );
    }
}
 
export default A;