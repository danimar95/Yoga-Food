import React from "react";

// Styles
import Card from 'react-bootstrap/Card';

// Components
import UserNameLeft from "../UserName/userNameLeft";

const UserCard = ({body, className}) => {
  return (
    <Card className= {`user-card ${className}`}>
      <Card.Body className="user-card-body">
        {body}
      </Card.Body>
      <UserNameLeft cardClassName={`each-name-${className}`} name = {'Karen'} city = {'New York'}/>
    </Card>
  )
}
export default UserCard;