import React from "react";

// Styles
import Card from "react-bootstrap/Card";

const MainCard = ({title,body,className,children}) => {
  return(
    <Card className = {className}>
      <div className="header-title">{title}</div>
      <div className="header-body">{body}</div>
      {children}
    </Card>
  )
};
export default MainCard;