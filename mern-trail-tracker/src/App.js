import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import TrailList from "./components/trail-list.js";
import CreateTrail from "./components/create-trail.js";
import EditTrail from "./components/edit-trail.js";
import CreateUser from "./components/create-user.js";

function App() {
  return (
    <Router>
        <Nav />
        <Header/>
            <Route path="/" exact component ={TrailList} />
            <Route path="/edit/:id/" component={EditTrail} />
            <Route path="/create"  component ={CreateTrail} />
            <Route path ="/user" component = {CreateUser} />
    </Router>
  );
}

export default App;
