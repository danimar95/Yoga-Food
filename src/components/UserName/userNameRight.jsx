import React from "react";
import User from '../../assets/pp.png';

const UserNameLeft = ({name, city, cardClassName}) => {
  return(
    <div className={`user-cards-responsive ${cardClassName}`}>
      <img src={User} alt="user" className="user-image"></img>
      {`${name} - ${city}`}
    </div>
  )
};
export default UserNameLeft;