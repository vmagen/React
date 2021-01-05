import React from 'react'
import {Card} from 'react-bootstrap'
export default function FCIngredient(props) {
    return (
        <Card>
            <Card.Img variant="card-img-top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}
