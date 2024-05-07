import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './inventory.css'; // Import the CSS file for styling

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    // Fetch inventory data from the API
    fetch('https://6605f27ed92166b2e3c3083a.mockapi.io/api/v1/inventory')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setInventoryData(data);
        } else {
          console.error('Error: Fetched data is not an array');
        }
      })
      .catch(error => console.error('Error fetching inventory data:', error));
  }, []);

  const handleViewDetails = (carTitle) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(carTitle)}`;
    window.open(googleSearchUrl, '_blank');
  };

  return (
    <Container>
      <h2 className="inventory-title">Car Inventory</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {inventoryData.map((car) => (
          <Col key={car.id}>
            <Card className="inventory-card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${car.image})` }}
              />
              <Card.Body>
                <Card.Title>{car.year} {car.make} {car.model}</Card.Title>
                <Card.Text>Price: {car.price} Mileage: {car.mileage}</Card.Text>
                <Button variant="outline-light" onClick={() => handleViewDetails(`${car.year} ${car.make} ${car.model}`)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Inventory;
