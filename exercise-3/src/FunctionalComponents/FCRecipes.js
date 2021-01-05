import React from 'react'
import FCRecipe from '../FunctionalComponents/FCRecipe';

export default function FCRecipes(props) {

    let list = props.items.map(
        (r,index) => <FCRecipe id={r.ID} name={r.Name}  image={r.image} ReturnIngredients={props.ReturnIngredients} ingredients={props.ingredients} key={r.id}  />);

    return (
        <div className="recipesDiv">
            {list}
        </div>
    )
}
