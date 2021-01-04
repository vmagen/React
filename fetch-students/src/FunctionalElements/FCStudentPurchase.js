import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../Assets/156.jpg"

export default function FCStudentPurchase(props) {

  let dateFormat = require("dateformat");
  let now = new Date();

  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Date: {dateFormat(props.Date,"dd-mm-yyyy")}</Card.Title>
        <Card.Title>Name: {props.Name}</Card.Title>
        <Card.Text>Price: {props.price}</Card.Text>
        <Card.Text>Amount: {props.amount}</Card.Text>
      </Card.Body>
    </Card>
  )
}
