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
      showDetails: false,
    };
  }
  componentDidMount() {
    axios.get(Url)
    .then( res => {
      const arrayOfProfile = res.data.results
      this.setState({arrayOfProfile})
    })
  };

  showDetails = () => {
    this.setState({...this.state, showDetails:!this.state.showDetails})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div>{this.state.arrayOfProfile.map((profile, index) => {
          return (
            <ProfileInfo
             key= {index} 
             firstName={profile.name.first} 
             lastName={profile.name.last}
             age= {profile.dob.age}
             dob={profile.dob.date}
             pic={profile.picture.large}
             />
          )
        })}</div>
      </header>
    </div>
    )
  }
}

export default App;
