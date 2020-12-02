import React from 'react'

export default function FRecipe(props) {
    
    const ClickOnMe=()=>{

         props.eatMe(props.index)
    }

    return (
        <div>
            <img src={props.img}/>
            <p>{props.title}</p>
            <button onClick={ClickOnMe}>EatMe</button>
        </div>
    )
}
