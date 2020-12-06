import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function FCItem(props) {
  
  const AddToCart=()=>{
    this.props.AddToCart(props.index);
  }
   
  return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
             <Card.Title>
               {props.title}
              </Card.Title>
          <Card.Text>
                { props.desc }
          </Card.Text>
          <Button  onClick={AddToCart} variant="primary">Add To cart</Button>
        </Card.Body>
      </Card>
    )
}
