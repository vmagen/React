import React from 'react'

export default function FCRecipe(props) {

    const eatRecipe = () => {
        props.getRecipe(props.index)
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.img}/>
            <button onClick={eatRecipe}>EAT</button>
        </div>
    )
}
