import React from "react";
import RoutineImg from '../../assets/Sushi.png';
// Styles
import Card from "react-bootstrap/Card";

const RoutineCard = ({body}) =>{
  return(
    <Card className="routine-card">
      <img src = {RoutineImg} alt = "sushi" className = "routine"></img>
      <span className="routine-card-body">{body}</span>
    </Card>
  )
};
export default RoutineCard;