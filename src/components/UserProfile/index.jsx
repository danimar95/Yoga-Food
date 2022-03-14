import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

// Style
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

const UserProfile = ({ firstName, lastName, email, show, handleClose, avatar }) => {
  return(
    <Modal xs={12} show={show}  onHide={handleClose} className="employee-detail-modal" centered >
      <Card className="user-profile-card">
        <Card.Header className = "profile-card-header">
          <Button className="closeButton float-right">
            <FontAwesomeIcon icon={faTimesCircle} onClick={handleClose}/>
          </Button> 
          <img src = {avatar} alt = "user" className="user-picture"></img>
        </Card.Header>
        <Card.Body className="profile-card-body">
          <div className="profile-user-name">{`${firstName} ${lastName}`}</div>
          <div className="profile-user-email">
            <FontAwesomeIcon icon={faEnvelope} />
            {email}
          </div>
        </Card.Body>
      </Card>
    </Modal>
  )
};
export default UserProfile;