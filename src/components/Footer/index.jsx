import React from "react";
import Logo from '../../assets/FoonkieMonkey.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Styles
import Col from "react-bootstrap/Col";
import Row  from "react-bootstrap/Row";
import InputGroup  from "react-bootstrap/InputGroup";
import Button  from "react-bootstrap/Button";
import "@fontsource/epilogue";
import "@fontsource/dm-sans";
import DropdownButton from "../DropdownButton";


const Footer = () => {
  return( 
    <>
      <Row> 
        <Col xs={{span:12, order:3}} md={{span:4, order:1}} className="first-col">
          <div className="logo-footer"><img src = {Logo} alt = "logo" className="logo"></img></div>
          <span className="contact-number">+0 (0000) 000 00-00 </span>
          <span className="contact-email">support@sniff.com</span>
        </Col>
        <Col xs={{span:12, order:2}} md={{span:5, order:2}}>
          <DropdownButton />
          <div className="second-col-title">Quick Links</div>
          <div className= "second-col">
            <Col md={6} className = "second-col-cols">
              <Button className="quick-links">Product</Button>
              <Button className="quick-links">Information</Button>
            </Col>
            <Col md={6} className = "second-col-cols">
              <Button className="quick-links">Company</Button>
              <Button className="quick-links">Foonkie monkey</Button>
            </Col>
          </div>
        </Col>
        <Col xs={{span:12, order:1}} md={{span:3, order:3}} >
          <div className="subscribe">Subscribe</div>
          <InputGroup className=" input-group">
            <input type="text" className="form-control" placeholder="Get product updates"></input>
            <Button className="btn btn-outline-secondary arrow-button" type="button">
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <hr className="footer-line"></hr>
      <Row className="second-row">
        <Col xs={6} md={4} className="footer-first-col">
          <Button className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </Button>
          <Button className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </Button>
          <Button className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
        </Col>
        <Col xs={6} md={4}>
          <span className="footer-rights first">Powered by</span>
          <img src = {Logo} alt ="logo" className="small-logo"></img>
        </Col>
        <Col xs={12} md={4} className="footer-rights-second">
        <span className="footer-rights">© 2021 FM. All rights reserved</span>
        </Col>  
      </Row>
    </>
  )
};
export default Footer;