import React, { Component } from 'react'
import axios from 'axios'
import FCRecipes from '../FunctionalComponents/FCRecipes';
import FCIngredients from '../FunctionalComponents/FCIngredients';

let apiUrl = "http://localhost:53570/api/dish/"

export default class CCMyKitchen extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      ingredients:[],
      show:false
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    axios.get(apiUrl,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        this.setState({
          items : res.data
        });
      })
  }
  
  ReturnIngredients = (id) => {
    axios.get(apiUrl +id  ,
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
        })
        .then(res => {
            this.setState({
              ingredients:res.data,
              items:this.state.items
            }, ()=> console.log(this.state.ingredients));
        })
}


  render() {
    return (
      <div>
        <FCRecipes items={this.state.items} ReturnIngredients={this.ReturnIngredients}  />
        <FCIngredients ingredients={this.state.ingredients}/>
      </div>
    )
  }
}
