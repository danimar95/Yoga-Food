import React from "react";
import { Link } from "react-router-dom";

// Styles
import Button from 'react-bootstrap/Button';
import Rectangle from '../../assets/Rectangle.png'
import './Home.css';
import MonkeyCircle from '../../assets/Ellipse 3.png';
import MonkeyFace from '../../assets/Group 40.png';
import VegetablesCircle from '../../assets/Ellipse 2.png';
import VegetablesImage from '../../assets/Group 37.png';
import ResponsiveApp from '../../assets/Responsive.png';
import "@fontsource/pridi";

// Components
import AppNavbar from "../../components/AppNabvar";
import UserCard from "../../components/UserCard";
import Features from "../../components/Features";
import MainCard from "../../components/MainCard";
import Footer from "../../components/Footer";

const Home = () => {
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
    <div className="download-container">
      <Link className="download-link" to="/users">
        <Button className="download-button">
          Download
        </Button>
      </Link>
      <Button className="play-button"></Button>
    </div>
    <div className="responsive-section">
      <img src={ResponsiveApp} alt="app-responsive" className="responsive-image"></img>
      <UserCard body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas"} className="one"/>
      <UserCard body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas"} className="two"/>
      <UserCard body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas"} className="three"/>
      <UserCard body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas"} className="four"/>
    </div>
    <div className="responsive-features">
      <Features />
    </div>
    <div className = "footer">
      <Footer />
    </div>
  </div>
)
}
export default Home;