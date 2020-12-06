import React from 'react'
import FCRecipe from './FCRecipe';

export default function FCRecipes(props) {

    let list = props.recipes.map(
        (r, index) => <FCRecipe title={r.title} img={r.img} index={index} getRecipe={props.getRecipe}/>);

    return (
        <div>
            {list}
        </div>
    )
}
