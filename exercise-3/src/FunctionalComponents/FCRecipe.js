import React from 'react'
import { Card, Button } from 'react-bootstrap';
import FCIngredients from '../FunctionalComponents/FCIngredients';

export default function FCRecipe(props) {
    
    const GetAllIngredients = (index) => {
        props.ReturnIngredients(props.id) ;
        <FCIngredients ingredients= {props.ingredients}/>
    }

    return (
        <Card style={{ width: '18rem', position: 'relative' }}>
            <Card.Img variant="card-img-top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Button variant="secondary" onClick={GetAllIngredients} >Show Ingredients</Button>
            </Card.Body>
        </Card>
    )
}
