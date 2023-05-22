import React from "react";
import Card from 'react-bootstrap/Card';


function ProfileInfo(props) {
    const {firstName, lastName, age, dob, pic, cell, email, gender, showDetails} = props
    console.log(showDetails)
    return (
      <Card style={{ width: '25rem', backgroundColor:"#70b382",
         borderRadius: 15, margin:10, padding: 10 }}>
        <Card.Img style={{borderRadius: 10}}
          variant="top" src= {pic}/>
        <Card.Body>
          <Card.Title style={{fontSize: 25, fontFamily: "fantasy"}}>
            {firstName} {lastName}
            </Card.Title>
          <Card.Text>
        <p>
            Gender: {gender}
          <br />
            Age: {age}
          <br />
            DOB: {dob.slice(0,9)}
          <br />
            #: {cell}
          <br />
            email: {email}
        </p>
          </Card.Text>
 
        </Card.Body>
      </Card>
    )
  }
  
  export default ProfileInfo;