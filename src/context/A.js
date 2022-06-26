import { Component } from "react";

class A extends Component {
    constructor(props){
        super(props)
    }
    state = {  }
    render() { 
        return ( 
            <div >
                <div style={
                {
                    background:'blue',
                    width:'300px',
                    color:'white',
                }
                }>

                Hello {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default A;