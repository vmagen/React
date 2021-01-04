import React from 'react'

const apiUrl = "http://localhost:51648/api/Student";

export default class CCAddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      AvgGrade: "",
      items:props.items     
    };

  }

  handleNameChange = (e) => {
    this.setState({ Name: e.target.value });
  }

  handleGradeChange = (e) => {
    this.setState({ AvgGrade: e.target.value });
  }


  handleSubmit = () => {
    
    const ids = this.state.items.map(user => user.StudentId);
    const sorted = ids.sort((a, b) => a - b);
    const maxID= sorted[sorted.length - 1];

    let newStudent =
    {
      "StudentId": maxID +1,
      "Name": this.state.Name,
      "AvgGrade": this.state.AvgGrade,
      "isActive": true,
      "purchases": []
    };

    fetch(apiUrl,
      {
        method: 'POST',
        body: JSON.stringify(newStudent),
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
      <form onSubmit={this.handleSubmit} style={{marginLeft: 150}}>
        <label>
          Name:
            <input type="text" value={this.state.Name} onChange={this.handleNameChange} />
        </label>
        <label>
          Grade:
            <input type="text" value={this.state.AvgGrade} onChange={this.handleGradeChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )

  }
}
