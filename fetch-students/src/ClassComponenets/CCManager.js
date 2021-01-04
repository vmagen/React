import React from 'react';
import axios from 'axios';
import FCStudnets from '../FunctionalElements/FCStudnets';
import FCStudentPurchases from '../FunctionalElements/FCStudentPurchases';
import EHeader from '../Elements/EHeader';
import loading from '../Assets/Loading.gif'
import CCAddStudent from './CCAddStudent';

const apiUrl = "http://localhost:51648/api/Student/";
export default class CCManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      purchases: []
    };
  }


  componentDidMount() {
    axios.get(apiUrl,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        const items = res.data;
        this.setState({
          items: items,
          isLoaded: true
        });
      })
  }
  

  getStudent = (index) => {
    let id = this.state.items[index].StudentId;
    axios.get(apiUrl + id
      ,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        const purchases = res.data;
        this.setState({
          purchases: purchases,
          items: [],
          showPlus:false,
          showBack:true
        });
      })

  }

  deleteStudent = (index) => {
    let id = this.state.items[index].StudentId;
    fetch(apiUrl + id
      ,
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
      .then(res => {
        console.log(res.data);
      })

  }
  refreshPage=()=> {
    window.location.reload();
  }

  

  render() {
    const error = this.state.error;
    const isLoaded = this.state.isLoaded;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><img className="loading" src={loading}/></div>;
    } else {
      return (
        <div id="main">
          {EHeader}
          <CCAddStudent  items={this.state.items}/>
          <FCStudnets items={this.state.items} getStudent={this.getStudent} deleteStudent={this.deleteStudent} />
          <FCStudentPurchases purchases={this.state.purchases} reload={this.refreshPage} />
        </div>
      );
    }
  }
}