import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from 'react-bootstrap/Button';

const DropdownButton = () => {
  return(
    <Dropdown as={ButtonGroup} className="dropdown">
    <Button variant="success" className="success-dropdown">Quick Links</Button>
  
    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
  
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Product</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Company</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Information</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Foonkie monkey</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
};
export default DropdownButton;