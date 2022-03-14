import React from "react";

// Styles
import Card from 'react-bootstrap/Card';
import Calories from '../../assets/Calories.png';
import Fruits from '../../assets/Fruits.png';
import Strength from '../../assets/Strength.png';

const HealthCard = ({title}) => {
  return(
    <Card className="health-card">
      <Card.Title>
        {title}
      </Card.Title>
      <Card.Body className="health-card-body">
        <div className="health-section">
          <img src = {Calories} alt= "calories" className = "calories"></img>
          <span>Calories</span>
        </div>
        <div className="health-section">
          <img src = {Fruits} alt= "strength" className = "strength"></img>
          <span>Delicious</span>
        </div>
        <div className="health-section">
          <img src = {Strength} alt= "fruits" className = "fruits"></img>
          <span>Healthy</span>
        </div>
        
      </Card.Body>
    </Card>
  )
};
export default HealthCard;