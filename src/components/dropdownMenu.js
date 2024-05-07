import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'; // Import the CSS file for styling

const DropdownMenu = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark" onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={expanded ? "show" : ""}>
        <Nav className="ml-auto">
          <NavDropdown title="Menu" id="basic-nav-dropdown" onClick={toggleExpanded}>
            <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/ourstory">Our Story</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DropdownMenu;
