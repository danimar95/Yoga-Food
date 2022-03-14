import React from "react";

// Styles
import Button from 'react-bootstrap/Button';
import Rectangle from '../../assets/Rectangle.png'
import './Users.css';
import MonkeyCircle from '../../assets/Ellipse 3.png';
import MonkeyFace from '../../assets/Group 40.png';
import VegetablesCircle from '../../assets/Ellipse 2.png';
import VegetablesImage from '../../assets/Group 37.png';
import "@fontsource/pridi";

// Components
import AppNavbar from "../../components/AppNabvar";
import MainCard from "../../components/MainCard";
import Footer from "../../components/Footer";
import UsersList from "../../components/UsersList";

const Users = () => {
  return(
    <div className="home-container">
    <img src={Rectangle} alt="orange-rectangle" className="first-orange-rectangle"></img>
    <img src={MonkeyCircle} alt = "monkey-circle" className="monkey-circle"></img>
    <img src={MonkeyFace} alt = "monkey-face" className="monkey-face"></img>
    <AppNavbar />
    <img src={VegetablesCircle} alt = "vegetabes-circle" className="vegetables-circle"></img>
    <img src={VegetablesImage} alt = "vegetables" className="vegetables-image"></img>
    <div className="header">
      <MainCard
        title = {'Title Lorem ipsum.'}
        body = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula rutrum arcu in dictum. Praesent risus turpis.'}
        className = "main-card"
      />
    </div>
    <div className = "users">
     <UsersList />
    </div>
    <div className = "footer">
      <Footer />
    </div>
  </div>
  )
};
export default Users;