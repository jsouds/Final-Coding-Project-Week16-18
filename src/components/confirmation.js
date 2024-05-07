import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'; // Import the react-confetti library

const Confirmation = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  // Use useEffect to start the confetti effect when the component mounts
  useEffect(() => {
    return () => {
      // Clean up the confetti effect when the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <Container style={{ textAlign: 'center' }}>
      <Confetti width={window.innerWidth} height={window.innerHeight} /> {/* Add the Confetti component */}
      <h2 style={{ fontSize: '2em' }}>Appointment Confirmed!</h2>
      <p>Your appointment has been successfully submitted. We look forward to seeing you!</p>
      <Button variant="primary" style={{ fontSize: '1.5em' }} onClick={handleReturn}>
        Return to Home Page
      </Button>
    </Container>
  );
}

export default Confirmation;
