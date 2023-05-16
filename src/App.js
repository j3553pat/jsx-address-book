import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ProfileInfo from "./profileCard.js";
const Url = "https://randomuser.me/api?results=25"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfProfile: [],
      isLikes: false,
    };
  }
  componentDidMount() {
    axios.get(Url)
    .then( res => {
      const arrayOfProfile = res.data
      this.setState({arrayOfProfile})
    })
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>{this.state.arrayOfProfile.map((profile, index) => {
          return (
            <ProfileInfo
             key= {index} 
             name={profile.name}
             />
          )
        })}</p>
      </header>
    </div>
    )
  }
}

export default App;
