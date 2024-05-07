import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Confirmation from './confirmation';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

const Appointment = () => {
  const [formData, setFormData] = useState({
    appointmentDate: '',
    name: '',
    phoneNumber: '',
    email: '',
    make: '',
    model: '',
    vin: ''
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch('https://6605f27ed92166b2e3c3083a.mockapi.io/api/v1/Dealership', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      navigate('/confirmation');
    } catch (error) {
      console.error('Error occurred while submitting the form', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container fluid style={{ textAlign: 'left', backgroundColor: '#2E4C80', padding: '20px', color: 'white', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2em', color: '#FFD700' }}>Book an Appointment</h2>
      <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="appointmentDateTime">
          <Form.Label style={{ color: '#FFD700', fontWeight: 'bold' }}>Appointment Date and Time:</Form.Label>
          <Form.Control type="datetime-local" name="appointmentDate" value={formData.appointmentDate} onChange={handleInputChange} style={{ fontSize: '1.5em' }} />
        </Form.Group>
        {/* Form groups with bold text and larger form submission boxes */}
        <Form.Group className="mb-3" controlId="phoneNumber" style={{ textAlign: 'left' }}>
          <Form.Label style={{ color: '#FFD700', fontWeight: 'bold' }}>Phone Number:</Form.Label>
          <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} style={{ fontSize: '1.5em', backgroundColor: '#FFFFFF', color: '#2E4C80' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email" style={{ textAlign: 'left' }}>
          <Form.Label style={{ color: '#FFD700', fontWeight: 'bold' }}>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ fontSize: '1.5em', backgroundColor: '#FFFFFF', color: '#2E4C80' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="make" style={{ textAlign: 'left' }}>
          <Form.Label style={{ color: '#FFD700', fontWeight: 'bold' }}>Car Make:</Form.Label>
          <Form.Control type="text" name="make" value={formData.make} onChange={handleInputChange} style={{ fontSize: '1.5em', backgroundColor: '#FFFFFF', color: '#2E4C80' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="model" style={{ textAlign: 'left' }}>
          <Form.Label style={{ color: '#FFD700', fontWeight: 'bold' }}>Car Model:</Form.Label>
          <Form.Control type="text" name="model" value={formData.model} onChange={handleInputChange} style={{ fontSize: '1.5em', backgroundColor: '#FFFFFF', color: '#2E4C80' }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="vin" style={{ textAlign: 'left' }}>
          <Form.Label style={{ color: '#FFD700', fontWeight: 'bold' }}>VIN:</Form.Label>
          <Form.Control type="text" name="vin" value={formData.vin} onChange={handleInputChange} style={{ fontSize: '1.5em', backgroundColor: '#FFFFFF', color: '#2E4C80' }} />
        </Form.Group>
        <Button variant="warning" type="submit" style={{ fontSize: '1.5em', width: '100%', backgroundColor: '#FFD700', borderColor: '#FFD700' }}>Submit</Button>
      </Form>
    </Container>
  );
}

export default Appointment;