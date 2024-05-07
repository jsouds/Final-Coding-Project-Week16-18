import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg="gradient" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
