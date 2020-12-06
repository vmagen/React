import React from 'react'
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FCRecipe(props) {

  const eatRecipe = () => {
    props.getRecipe(props.index)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <Button onClick={eatRecipe} variant={props.variant}>{props.btnTitle}</Button>
      </Card.Body>
    </Card>

  )
}
