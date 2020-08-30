import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./bookContainer.css";

const Trail = props => ( 
  
  //props are the values passed from the class TrailList extends Component, where we
  //returned <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}
  <tr>
    <td>{props.trail.username}</td>
    <td>{props.trail.description}</td>
    <td>{props.trail.duration}</td>
    <td>{props.trail.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.trail._id}>edit</Link> | <a href="#" onClick={() => { props.deleteTrail(props.trail._id) }}>delete</a>
    </td>
  </tr>
)

export default class TrailList extends Component {
  constructor(props) {
    super(props);

    this.deleteTrail = this.deleteTrail.bind(this);

    this.state = {trails: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/trails/')
      .then(response => {
        this.setState({ trails: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTrail(id) {
    axios.delete('http://localhost:5000/trails/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      trails: this.state.trails.filter(el => el._id !== id)
    })
  }

  trailList() {
    return this.state.trails.map(currenttrail => {
      return <Trail trail={currenttrail} deleteTrail={this.deleteTrail} key={currenttrail._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Trails</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.trailList() }
          </tbody>
        </table>
      </div>
    )
  }
}