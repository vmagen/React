import React from 'react'
import FCRecipe from './FCRecipe';

export default function FCRecipesDone(props) {
    
   
    let list = props.eatenRecipes.map(
        (r, index) => <FCRecipe title={r.title} img={r.img} desc={r.desc} index={index} getRecipe={props.getRecipe} btnTitle={'Return Dish'} variant={'btn btn-outline-danger'} />);

    return (
        <div className="recipesDiv">
            {list}
        </div>
    )
}
