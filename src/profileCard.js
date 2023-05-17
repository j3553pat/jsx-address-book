import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProfileInfo(props) {
    const {firstName, lastName, age, dob, pic} = props
    return (
      <Card style={{ width: '18rem', backgroundColor:"#70b382",
         borderRadius: 15, margin:10, padding: 10 }}>
        <Card.Img style={{borderRadius: 10}}
          variant="top" src= {pic}/>
        <Card.Body>
          <Card.Title style={{fontSize: 25, fontFamily: "fantasy"}}>
            {firstName} {lastName}
            </Card.Title>
          <Card.Text>
          Age: {age}
          <br />
            DOB: {dob.slice(0,9)}
          </Card.Text>
          <Button variant="primary">Show Details</Button>
        </Card.Body>
      </Card>
    )
  }
  
  export default ProfileInfo;