import React, { Component, createContext, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import "./bookContainer.css";
import TrailContext from "./components/TrailContext";
import TrailName from "./components/Pages/trailName"; 

class CreateTrails extends Component {
  
  //use this for the page that asks for title of recipe only? { name } = useContext(TrailContext);
  //otherwise use something like the one below:

  const [trailState, setTailState] = useState({
    username: "",
    description: "",
    distance: "",
    date: new Date(),
    users: [],
  });
  
  // constructor(props) {
  //   super(props);

  //   this.onChangeUsername = this.onChangeUsername.bind(this);
  //   this.onChangeDescription = this.onChangeDescription.bind(this);
  //   this.onChangeDistance = this.onChangeDistance.bind(this);
  //   this.onChangeDate = this.onChangeDate.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);

  //   this.state = {
  //     username: "",
  //     description: "",
  //     distance: "",
  //     date: new Date(),
  //     users: [],
  //   };
  // }

  // componentDidMount() {

  useEffect (()=> {
    axios.get('http://localhost:5000/users/')
    .then(res => {
      if (res.data.length > 0){
       setTrailState({
        // this.setState({
         users: res.data.map(user => user.username),
         username: res.data[0].username
      })
      }
    })
  }, []);/// NEED DEPENDCY

  onChangeUsername(e) {
    //this.setState({
      setTrailState({
        ...trailState,
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    // this.setState({
      setTrailState({
        ...trailState,
      description: e.target.value,
    });
  }

  onChangeDistance(e) {
    // this.setState({
      setTrailState,
      distance: e.target.value,
    });
  }

  onChangeDate(date) {
    // this.setState({
      setTrailState({
        ...setTrailState,
      date: date,
    });
  }


  //HOW DO I HANDLE ON SUBMIT FOR EACH PAGE???? 
  //HOW DO I SEND INFO EACH INFO TO THE BACKEND?? 

  onSubmit(e) {
    e.preventDefault();

    const trail = {
      username: this.state.username,
      description: this.state.description,
      distance: this.state.distance,
      date: this.state.date,
    };
    console.log(trail);
    
    axios.post('http://localhost:5000/trails/add', trail)
    .then(res => console.log(res.data));
    
    window.location = "/";
  }

  render() {
    return (
      <div className="sectionContainer">
        <h5>Create New Trail Log</h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <TrailName  />
          {/* <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div> */}
          <div className="form-group">
            <label>Distance (in miles):</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.distance}
              onChange={this.onChangeDistance}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                value={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Trail Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }

export default CreateTrails;
