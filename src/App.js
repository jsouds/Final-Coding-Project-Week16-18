import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/navbar'; // Import the Navbar component
import Home from './components/home';
import Inventory from './components/inventory';
import Appointment from './components/appointment';
import Confirmation from './components/confirmation';
import AppointmentCalendar from './components/appointmentCalendar';
import DropdownMenu from './components/dropdownMenu';
import Events from './components/events';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/appointmentCalendar" element={<AppointmentCalendar />} />
          <Route path="/dropdownMenu" element={<DropdownMenu/>} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
