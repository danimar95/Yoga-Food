import { React, useEffect, useState } from "react";

// Styles
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

// Components
import UserData from "../UserData";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync } from "../../redux/slices/users";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = useSelector((state) => state.users.total_pages);


  useEffect(() => {
    dispatch(getUsersAsync({page:currentPage}));
  }, [dispatch, currentPage]);

  return(
    <Card className="users-card">
      <Row className="users-headers">
        <div className="header-one"> Id</div>
        <div className="header-two"> Full name</div>
      </Row>
        {users.map((user) => (
          <UserData 
            key={user.id} 
            id={user.id} 
            firstName={user.first_name} 
            lastName={user.last_name}
            email={user.email}
            avatar={user.avatar}
          />
        ))}
        <Row className="pagination">
          <span className="pages-numbers">
            {`${currentPage} / ${totalPages}`}
          </span>
          <Button 
            className="pagination-arrow-left"
            onClick={() => setCurrentPage(currentPage -1)}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button
            className="pagination-arrow-right"
            onClick={() => setCurrentPage(currentPage +1)}
            disabled = {currentPage === totalPages}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </Row>
    </Card>
  )
};
export default UsersList;