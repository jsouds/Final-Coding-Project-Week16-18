import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';

const RSVPForm = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [event, setEvent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server, update state, etc.)
    // After handling the form submission, you can close the modal or perform any other action
    handleClose(); // Close the modal after form submission
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>RSVP Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEvent">
            <Form.Label>Event</Form.Label>
            <Form.Control as="select" value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="Spring Fling Sale Day">Spring Fling Sale Day</option>
            <option value="School's Out Party">School's Out Party</option>
            <option value="Labor Day BBQ">Labor Day BBQ</option>
            <option value="Halloween Haunt">Halloween Haunt</option>
            <option value="Fall Fest">Fall Fest</option>
            <option value="Christmas Miracle Day">Christmas Miracle Day</option>
            <option value="NYE Sale">NYE Sale</option>
            <option value="Valentine's Ride">Valentine's Ride</option>
            <option value="St. Patrick's Day">St. Patrick's Day</option>

              {/* Add options for other events */}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit RSVP
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const Event = () => {
  const [showRSVP, setShowRSVP] = useState(false);

  const handleRSVPClick = () => {
    setShowRSVP(true);
  };

  const handleCloseRSVP = () => {
    setShowRSVP(false);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleRSVPClick}>RSVP</Button>
      <RSVPForm show={showRSVP} handleClose={handleCloseRSVP} />
    </div>
  );
};

const Events = () => {
    const [showRSVP, setShowRSVP] = useState(false);
  
    const handleRSVPClick = () => {
      setShowRSVP(true);
    };
  
    const handleCloseRSVP = () => {
      setShowRSVP(false);
    };
  
    return (
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to right, blue, gold)' }}>
        <Table bordered style={{ width: '80%', border: '7px solid black', background: 'white' }}>
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Time</th>
              <th>Description</th>
              <th>RSVP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'center' }}>Spring Fling Sale Day</td>
              <td style={{ textAlign: 'center' }}>4/15/2024</td>
              <td style={{ textAlign: 'center' }}>2pm</td>
              <td style={{ textAlign: 'center' }}>Come see our spring cleaning sales!</td>
              <td style={{ textAlign: 'center' }}>
                <Event />
              </td>
            </tr>
            <tr>
            <td style={{ textAlign: 'center' }}>School's Out Party</td>
            <td style={{ textAlign: 'center' }}>5/16/2024</td>
            <td style={{ textAlign: 'center' }}>3pm</td>
            <td style={{ textAlign: 'center' }}>It's Summer vacation! Bring the family to enjoy our fun filled day!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Labor Day BBQ</td>
            <td style={{ textAlign: 'center' }}>9/7/2024</td>
            <td style={{ textAlign: 'center' }}>1pm</td>
            <td style={{ textAlign: 'center' }}>Celebrate Labor Day with us by enjoying a burger or hot dog on the house!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Halloween Haunt</td>
            <td style={{ textAlign: 'center' }}>10/31/2024</td>
            <td style={{ textAlign: 'center' }}>2pm</td>
            <td style={{ textAlign: 'center' }}>Get your fright on with our famous haunted test drives!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>
          </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Fall Fest</td>
            <td style={{ textAlign: 'center' }}>11/19/2024</td>
            <td style={{ textAlign: 'center' }}>2pm</td>
            <td style={{ textAlign: 'center' }}>With the holidays right around the corner come see our amazing deals!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>
               </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Christmas Miracle Day</td>
            <td style={{ textAlign: 'center' }}>12/17/2024</td>
            <td style={{ textAlign: 'center' }}>2pm</td>
            <td style={{ textAlign: 'center' }}>Join us as we partner with Children's Hospital to give back to kids in need!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>         
         </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>NYE Sale</td>
            <td style={{ textAlign: 'center' }}>12/31/2024</td>
            <td style={{ textAlign: 'center' }}>2pm</td>
            <td style={{ textAlign: 'center' }}>All vehicles are no money down until 2025!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>        
            </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>Valentine's Ride</td>
            <td style={{ textAlign: 'center' }}>2/6/2025</td>
            <td style={{ textAlign: 'center' }}>2pm</td>
            <td style={{ textAlign: 'center' }}>Find your special someone their special ride!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>   
            </tr>
          <tr>
            <td style={{ textAlign: 'center' }}>St. Patrick's Day </td>
            <td style={{ textAlign: 'center' }}>3/17/2025</td>
            <td style={{ textAlign: 'center' }}>2pm</td>
            <td style={{ textAlign: 'center' }}>Feelin' lucky? Come see how lucky our deals are!</td>
            <td style={{ textAlign: 'center' }}>
                <Event />
                </td>   
            </tr>
          </tbody>
        </Table>
        <RSVPForm show={showRSVP} handleClose={handleCloseRSVP} />
      </div>
    );
  };
  

export default Events;
