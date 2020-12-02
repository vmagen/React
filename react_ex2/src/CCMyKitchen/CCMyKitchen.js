import React, { Component } from 'react'
import FRecipes from '../FunctionalComponenet/FRecipes'

export default class CCMyKitchen extends Component {
    
    state={
        recipes: [{title:"bulshit" , img:"../Assets/golda.jpeg"},
        {title:"bulshit1" , img:"../Assets/golda.jpeg"},
        {title:"bulshit2" , img:"../Assets/golda.jpeg"}],
        counter: 0,
        recipesDone:[]
    }
    
    EatMe=(index)=>{
        let temp =[];
        temp = this.state.recipes;
        temp.splice(index,1);
        this.setState({recipes:temp});
    }

    render() {
        return (
            <div>
                <FRecipes recipes= {this.state.recipes} eatMe= {this.EatMe}/>
            </div>
        )
    }



}
