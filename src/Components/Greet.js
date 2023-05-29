import React from "react";

// function Greet() {
//     return <h1> Howdy y'all!</h1>
// }

const Greet = (props) => {
    console.log(props);
    return (
        <>
        <h1> Howdy {props.name}, rando:{props.rando}!</h1>
        <p>{props.children}</p>
        </>
        )
    }
    
    export default Greet;