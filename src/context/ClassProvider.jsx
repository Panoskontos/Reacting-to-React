import React, {Component} from "react";

// creating a context
export const StateContext = React.createContext();

export class GlobalState extends Component{
    
    constructor(props){
        super(props)
    }

    // memory
    state = {
        name: 'Panos'
    }

    render(){
        return(
            <StateContext.Provider value={this.state}>
                {this.props.children}
            </StateContext.Provider>
        )
    }
}