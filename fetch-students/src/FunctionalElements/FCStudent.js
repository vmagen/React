import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../Assets/227.jpg';
import FCStudentPurchases from './FCStudentPurchases';
import delImage from '../Assets/delete.png';

export default function FCStudent(props) {

  const ShowStudentPurchases = () => {
     props.getStudent(props.index) ;
     <FCStudentPurchases purchases= {props.purchases}/>
  }

  const deleteStudent=()=>{
    props.deleteStudent(props.index);
  }

  return (
    <Card style={{ width: '18rem', position: 'relative' }}>
      <Card.Img variant="top" src={image} />
      <Button onClick={deleteStudent} style = {{width: 50, height:50, position:'absolute'}} variant="secondary top" src={delImage}/>
      <Card.Body>
        <Card.Title>Name: {props.Name}</Card.Title>
        <Card.Text>ID: {props.ID}</Card.Text>
        <Card.Text>Grade: {props.AvgGrade}</Card.Text>
        <Button variant="secondary" onClick={ShowStudentPurchases}>Show Purchases</Button>
      </Card.Body>
    </Card>
  )
}
