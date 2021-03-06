import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';

const apiUrl = "http://localhost:53570/api/dish/";
const apiIngredients = "http://localhost:53570/api/Ingredient/";

export default class CCAddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            CookingMethod: "",
            Time: "",
            Image: "",
            ingredients: [],
            selectedIngredients:[]
        };
        
        this.onSelect=this.onSelect.bind(this);
    }

    componentDidMount() {
        axios.get(apiIngredients,
            {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8'
                })
            })
            .then(res => {
                this.setState({
                    ingredients: res.data.map(o => { return { name: o.Name, id: o.ID } })
                }, () => console.log(this.state.ingredients));
            })
    }

    handleNameChange = (e) => {
        this.setState({ Name: e.target.value });
    }

    handleCookingChange = (e) => {
        this.setState({ CookingMethod: e.target.value });
    }

    handleTimeChange = (e) => {
        this.setState({ Time: e.target.value });
    }

    handleImageChange = (e) => {
        this.setState({ Image: e.target.value });
    }

    onSelect(selectedList) {

        this.setState({
            selectedIngredients:selectedList
        },()=> console.log(this.state.selectedIngredients));
    }   

    handleSubmit = () => {
        let newRecipe =
        {
            "Name": this.state.Name,
            "imageURL": this.state.Image,
            "cookingTime": this.state.Time,
            "cookingMethod": this.state.CookingMethod,
            "ingredientsIDs":  this.state.selectedIngredients.map(i=>i.id)
        };

        fetch(apiUrl,
            {
                method: 'POST',
                body: JSON.stringify(newRecipe),
                headers: new Headers({
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json; charset=UTF-8',
                })
            })
            .then(res => {
                console.log('res=', res);
                console.log('res.status', res.status);
                console.log('res.ok', res.ok);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch btnFetchGetStudents= ", result);
                },
                (error) => {
                    console.log("err post=", error);
                });

        console.log('end');
    }

    
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ marginLeft: 150, marginTop:100 }}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Recipe Name</label></td>
                            <td>
                                <input type="text" value={this.state.Name} onChange={this.handleNameChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Cooking Method</label></td>
                            <td>
                                <input type="text" value={this.state.Cooking} onChange={this.handleCookingChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Cooking Time</label></td>
                            <td>
                                <input type="text" value={this.state.Time} onChange={this.handleTimeChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Cooking Image</label></td>
                            <td>
                                <input type="text" value={this.state.Image} onChange={this.handleImageChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Multiselect  //https://www.npmjs.com/package/multiselect-react-dropdown
                    options={this.state.ingredients}
                    isObject={true}
                    selectedValues={this.state.selectedValue} 
                    onSelect={this.onSelect} 
                    onRemove={this.onRemove} 
                    displayValue="name" 
                />
                <input type="submit" value="Add Recipe" />
            </form>
        )

    }
}
