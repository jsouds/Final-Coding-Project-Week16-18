import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleHover = (event) => {
    event.target.style.background = 'linear-gradient(to right, blue, gold)';
  };

  const handleMouseLeave = (event) => {
    event.target.style.background = 'linear-gradient(to right, gold, blue)';
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', border: '7px solid black', background: 'linear-gradient(to right, blue, gold)' }}>
      <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Souders Luxury Cars</div>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: 0, width: '70%', margin: '0 auto' }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: 'white', border: '2px solid white', padding: '15px 20px', fontSize: '18px', fontWeight: 'bold', background: 'linear-gradient(to right, blue, gold)', transition: 'background 0.5s' }} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            Home
          </Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/inventory" style={{ color: 'white', border: '2px solid white', padding: '15px 20px', fontSize: '18px', fontWeight: 'bold', background: 'linear-gradient(to right, blue, gold)', transition: 'background 0.5s' }} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            Inventory
          </Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/appointmentCalendar" style={{ color: 'white', border: '2px solid white', padding: '15px 20px', fontSize: '18px', fontWeight: 'bold', background: 'linear-gradient(to right, blue, gold)', transition: 'background 0.5s' }} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            My Appointments
          </Link>
        </li>
        <li style={{ marginRight: '20px' }}>
          <Link to="/events" style={{ color: 'white', border: '2px solid white', padding: '15px 20px', fontSize: '18px', fontWeight: 'bold', background: 'linear-gradient(to right, blue, gold)', transition: 'background 0.5s' }} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            Events
          </Link>
        </li>
        <li style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textDecoration: 'underline', border: '2px solid white', background: 'linear-gradient(to right, gold, blue)', padding: '15px 20px' }}>
          Hours: M-F: 9am-6pm
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
