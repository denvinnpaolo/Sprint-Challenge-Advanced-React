import React from 'react';
import logo from './logo.svg';
import axios from "axios";
import './App.css';
import { Container} from 'semantic-ui-react'

import PlayerCard from "./components/PlayerCard";
import Navbar from './components/navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      people: []
    };
  }
  componentDidMount(){
    axios
    .get(`http://localhost:5000/api/players`)
    .then(people=>{
      this.setState({people:people.data})})
    .catch(err => console.log("noooo: ", err));
  }  
  render(){
    return(
      <div className="app">
        <div className="header">
          <Navbar />
        </div>
        <Container  className="cardcontainer">
          <p className="pCard">{this.state.people.map(person=>(<PlayerCard person={person} personID={person.id}/>))}</p>
        </Container>
      </div>
    );
  }
};

export default App;
