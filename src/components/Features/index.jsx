import React from "react";
import Cellphone from '../../assets/Group 48.png';
import Salad from '../../assets/Group-7.png';
import Order from '../../assets/Group-8.png';
import BackgroundCircle from '../../assets/Ellipse 4.png';
import { Link } from "react-router-dom";

// Styles
import Button from "react-bootstrap/Button";
// Components
import PersonalizedRecipesCard from "../PersonalizedRecipesCard";
import HealthCard from "../HealthCard";
import RoutineCard from "../RoutineCard";
import MainCard from "../MainCard";

const Features = () => {
  return (
    <>
      <img src = {BackgroundCircle} alt ="circle" className="cellphone-circle"></img>
      <img src={Cellphone} alt="cellphone" className="cellphone"></img>
      <img src={Salad} alt="salad" className="salad"></img>
      <img src={Order} alt="order" className="order"></img>
      <PersonalizedRecipesCard body = {'All your meals with personalized recipes'}/>
      <HealthCard title={'Take care of your health.'}/>
      <RoutineCard body = {'Learn new ways to improve your health in your routine'}/>
      <div className="silverware"></div>
      <MainCard
        title = {'Lorem ipsum.'}
        body = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula rutrum arcu in dictum. Praesent risus turpis.'}
        className= "main-card second"
      >
      <Link className="download-link-second" to="/users">
        <Button className="download-button-second">
          Download
        </Button>
      </Link>
      </MainCard>
    </>
  )
};
export default Features;