import React from "react";
import User from '../../assets/pp.png';


const UserNameLeft = ({name, city, cardClassName}) => {
  return(
    <div className={`user-cards-responsive ${cardClassName}`}>{`${name} - ${city}`}
      <img src={User} alt="user" className="user-image"></img>
    </div>
  )
};
export default UserNameLeft;