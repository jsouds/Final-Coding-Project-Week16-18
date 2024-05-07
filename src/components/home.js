import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backgroundImage from './car-image.png'; // Import the transparent image of the car

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // State variable to control rendering of "Thank You"

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle feedback submission
    // For demonstration, let's set showThankYou to true after submission
    setShowThankYou(true);
  };

  return (
    <Container fluid style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Row className="justify-content-md-center" style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
        <Col md="6">
          <div style={{ border: '2px solid black', padding: '10px', background: 'linear-gradient(to right, blue, gold)', borderRadius: '10px' }}>
            <h2 style={{ color: 'black' }}>Find Your Perfect Ride</h2>
            <p style={{ color: 'black' }}>Explore our latest car models and book an appointment today!</p>
          </div>
          <Link to="/appointment">
            <Button
              variant="primary"
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              style={{
                background: `linear-gradient(to right, ${isHovered ? 'gold, blue' : 'blue, gold'})`,
                color: 'black',
                fontSize: '1.2em', // Adjusted font size
                padding: '8px 16px', // Adjusted padding
                borderRadius: '8px'
              }}
            >
              Book an Appointment
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
        <Col md="6" className="text-center">
          {/* "Leave us Feedback" form and "Submit" button */}
          {showThankYou ? ( // Render "Thank You" if showThankYou is true
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', color: 'black' }}>Thank You</p>
          ) : (
            <Form onSubmit={handleFeedbackSubmit} style={{ display: 'flex', alignItems: 'center', border: '7px solid black', background: 'linear-gradient(to right, blue, gold)', padding: '10px', borderRadius: '10px' }}>
              <Form.Group controlId="feedback" style={{ marginRight: '10px' }}>
                <Form.Label style={{ color: 'black', fontSize: '1.2em', fontWeight: 'bold' }}>Leave us Feedback:</Form.Label>
                <Form.Control as="textarea" rows={3} style={{ fontSize: '1.2em' }} />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ fontSize: '1.2em', padding: '8px 16px', borderRadius: '8px' }}>Submit</Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
