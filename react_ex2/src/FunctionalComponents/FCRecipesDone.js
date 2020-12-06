import React from 'react'
import FCRecipe from './FCRecipe';

export default function FCRecipesDone(props) {

    let list = props.eatenRecipes.map(
        (r, index) => <FCRecipe title={r.title} img={r.img} index={index} getRecipe={props.getRecipe}/>);

    return (
        <div>
            {list}
        </div>
    )
}
