import React from 'react'
import FRecipe from './FRecipe';

export default function FRecipes(props) {
    return (
        <div>
            {props.recipes.map(
                (i,index)=><FRecipe title={i.title}  img={i.img} eatMe={props.eatMe} index={index}/>
            )}
        </div>
    )
}
