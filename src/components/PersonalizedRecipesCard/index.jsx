import React from "react";

// Styles
import Card from 'react-bootstrap/Card';

const PersonalizedRecipesCard = ({body}) => {
  return(
    <Card className="personalized">
      {body}
    </Card>
  )
};
export default PersonalizedRecipesCard;