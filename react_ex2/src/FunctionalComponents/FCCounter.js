import React from 'react'

export default function FCCounter(props) {
    return (
        <div>
            <br/>
            <h2>{props.counter > 0 ? `READY TO EAT: Recipes made: ${props.counter}` :` `}</h2>
            <br/>
        </div>
    )
}
