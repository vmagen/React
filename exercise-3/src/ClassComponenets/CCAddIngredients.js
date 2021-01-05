import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const apiUrl = "http://localhost:53570/api/Ingredient/";

class CCAddIngredients extends Component {
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Image:"",
            Calories:"",
            ingredients:[]
        };
    };

    handleNameChange=(e)=>{
        this.setState({ Name: e.target.value });
    }

    handleImageChange=(e)=>{
        this.setState({ Image: e.target.value });
    }

    handleCaloriesChange=(e)=>{
        this.setState({ Calories: e.target.value });
    }

    handleSubmit=()=>{
        let newIngredient =
        {
            "Name": this.state.Name,
            "Image": this.state.Image,
            "Calories": this.state.Calories
        };

        fetch(apiUrl,
            {
                method: 'POST',
                body: JSON.stringify(newIngredient),
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
            <form onSubmit={this.handleSubmit} style={{ marginLeft: 150 , marginTop:100}}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Ingredient Name</label></td>
                            <td>
                                <input type="text" value={this.state.Name} onChange={this.handleNameChange} />
                            </td>
                        </tr>
                       
                        <tr>
                            <td><label>Calories</label></td>
                            <td>
                                <input type="text" value={this.state.Calories} onChange={this.handleCaloriesChange} />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Image Url</label></td>
                            <td>
                                <input type="text" value={this.state.Image} onChange={this.handleImageChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="submit" value="Add Ingredient" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )

    }
}
export default withRouter(CCAddIngredients)