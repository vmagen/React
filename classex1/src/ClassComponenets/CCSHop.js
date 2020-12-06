import React, { Component } from 'react';
import FCItemList from '../FunctionComponennts/FCItemList';

 class CCSHop extends Component{
    constructor(props){
        super(props);
        this.state={
            itemList:[{img:"../Assets/1.jpeg", title:"wine 1", desc:"wine wine wine"},
            {img:"../Assets/2.jpeg", title:"wine 2", desc:"wine wine wine"},
            {img:"../Assets/3.jpeg", title:"wine 3", desc:"wine wine wine"}],
        
            cartCounter:0,
        
            cartItems:[]

        }

    }

    AddToCart = (index) => {
                  


     };
    
    render() {
        return (
            <div>  
                <FCItemList items={this.state.itemList} />
            </div>
        )
    }

 }

 export default CCSHop;