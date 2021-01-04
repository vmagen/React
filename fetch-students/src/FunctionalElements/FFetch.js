import { Button } from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FFetch(props) {

  const apiUrl = "http://localhost:51648/api/Student";
  function btnGetAll() {
    console.log('start');

    fetch(apiUrl,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
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
          result.map(st => console.log(st.Name));
          console.log('result[0].Name=', result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  return (
    <div>
      {btnGetAll}
    </div>
  )
}
