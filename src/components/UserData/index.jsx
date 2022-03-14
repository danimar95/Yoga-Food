import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import User from '../../assets/pp.png';
import ReactTooltip from 'react-tooltip';

// Components
import UserProfile from "../UserProfile";

const UserData = ({id,firstName,lastName,email,avatar}) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return(
    <Row className="users-data">
      <div className="data-one">{id}</div>
      <ReactTooltip id="profile" place="top" type='warning'/>
        <i data-tip="View profile" data-for="profile" className="data-two">
          <Button onClick= {handleShowModal} className="data-two">
            {`${firstName} ${lastName}`}
          </Button>
        </i>
      {showModal && (
        <UserProfile
          show={showModal}
          handleClose={handleCloseModal}
          idModal={id}
          email={email}
          avatar={avatar}
          firstName= {firstName}
          lastName={lastName}
          centered
        />
      )}
    </Row>
  )
};
export default UserData;