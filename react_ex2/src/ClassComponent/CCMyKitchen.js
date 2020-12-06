import React, { Component } from 'react'
import FCRecipes from '../FunctionalComponents/FCRecipes'
import FCRecipesDone from '../FunctionalComponents/FCRecipesDone';

export default class CCMyKitchen extends Component {
    
    state={
        recipes:[
        {title:"bulshit" , img:"../Assets/golda.jpeg"},
        {title:"bulshit1" , img:"../Assets/golda.jpeg"},
        {title:"bulshit2" , img:"../Assets/golda.jpeg"}
        ],
        eatenRecipes: []
    }

    getRecipe = (index)=>{
        let temp = [];
        let temp2 = [];
        temp = this.state.recipes;
        temp2 = [...this.state.eatenRecipes, this.state.recipes[index]];
        temp.splice(index,1);
        this.setState({
            recipes:temp,
            eatenRecipes:temp2});
    }


    getEatenRecipe = (index)=>{
        let temp = [];
        let temp2 = [];
        temp = this.state.eatenRecipes;
        temp2 = [...this.state.recipes, this.state.eatenRecipes[index]];
        temp.splice(index,1);
        this.setState({
            eatenRecipes:temp,
            recipes:temp2});
    }

    render() {
        return (
            <div>
                <FCRecipes recipes={this.state.recipes} getRecipe={this.getRecipe} />
                <hr/>
                <FCRecipesDone eatenRecipes={this.state.eatenRecipes} getRecipe={this.getEatenRecipe} />
            </div>
        )
    }
}
