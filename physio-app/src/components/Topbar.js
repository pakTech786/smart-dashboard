import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'; 
import AuthContext from '../helpers/context/AuthContext'; 

function Topbar() {
  const { isAuthenticated,user } = useContext(AuthContext);
  return (
    <Navbar expand="lg" className="topbar">
      <Container>
        <Navbar.Brand href="#home">Smart IoT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
      {isAuthenticated ? (
        <>
          <DropdownButton id="dropdown-basic-button" title={user?.username || 'username'}>
            <Dropdown.Item as={Link} to="/profile">
              Profile
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/">
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/logout">
              Logout
            </Dropdown.Item>
          </DropdownButton>   

        </>
      ) : (
        <>
          <Nav.Link href="/">Sign In</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </>
      )}
    </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default Topbar;
