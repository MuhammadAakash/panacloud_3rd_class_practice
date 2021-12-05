import React from "react";

function Learn(props){
    return(
        <div>
            <h1>I am Learning {props.serverLess} Technology </h1>
            <h1>I am also Learning {props.serverlessAI} Technology too.</h1>
            <h1>Now a days am doing an Internship as a {props.intership}</h1>
        </div>
    )
}

export default Learn;