import React from 'react'
import { Nav } from 'react-bootstrap'
import grocery from '../Assets/Grocery.png';


export default function FCHeader() {
    return (
        <Nav variant="tabs" className="navbar navbar navbar-expand navbar-light" defaultActiveKey="/MyKithcen">
            <Nav.Item>
                <img className="navImage" src={grocery} alt="" />
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/MyKitchen">My Kitchen</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/AddRecipe">Add Recipe</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/AddIngredient">Add Ingredient</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
