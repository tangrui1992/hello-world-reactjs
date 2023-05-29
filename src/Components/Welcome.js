import React, {Component} from "react";


class Welcome extends Component {
    render()
    {
        return (
            <div>
            <p>div tag start</p>
            <h1>this.props.name: {this.props.name}</h1>
            <h1>this.props.rando: {this.props.rando}</h1>
            <p>div tag end</p>
            </div>
            )
        }
        
        
    }
    
    export default Welcome;