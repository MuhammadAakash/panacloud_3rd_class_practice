import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>Today we are Eating in Dinner is {props.dishName}</h1>
            <h1>Today we are Eating in Dinner as a SweetDish {props.sweetDish}</h1>
        </div>
    )
}

export default Dinner