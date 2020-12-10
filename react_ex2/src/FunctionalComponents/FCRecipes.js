import React from 'react'
import FCRecipe from './FCRecipe';


export default function FCRecipes(props) {

  
  let list = props.recipes.map(
    (r, index) => <FCRecipe  title={r.title} img={r.img} desc={r.desc} key={index} index={index}  getRecipe={props.getRecipe} btnTitle={'Eat Me!'} variant={'btn btn-outline-primary'}/>);

  return (
    <div className="recipesDiv">
      {list}
    </div>
  )
}
