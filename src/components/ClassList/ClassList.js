import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class ClassList extends Component {
  constructor() {
    super();
    this.state={
      students:[],
      baseUrl:'http://localhost:3005/students?class='
    }
    
  }
componentDidMount(){
axios.get(`${this.state.baseUrl}${this.props.match.params.class}`)
      .then(res=>{
        this.setState({students:res.data});
      })
}
  render() {
    let studentsToDisplay=this.state.students.map((name,i)=>{
      return(
        <div>
          <Link to={`/student/${name.id}`} key={i}> <h3>{name.first_name}{name.lastName}</h3>
          </Link>
        </div>
      )    
    })

    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {studentsToDisplay}

      </div>
    )
  }
}