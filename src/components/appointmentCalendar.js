import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const AppointmentCalendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('https://6605f27ed92166b2e3c3083a.mockapi.io/api/v1/Dealership');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAppointments(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments data:', error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const removeAppointment = id => {
    // Remove the appointment with the given id from the list
    const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(updatedAppointments);
  };

  const EventAgenda = ({ event }) => {
    const handleDelete = () => {
      removeAppointment(event.id);
    };

    return (
      <div style={{ padding: '10px', marginBottom: '10px', color: 'white' }}>
        <strong style={{ color: 'white' }}>{event.title}</strong>
        <p>{event.description}</p>
        <p>{event.location}</p>
        <p style={{ color: 'white' }}>Make: {event.make}</p>
        <p style={{ color: 'white' }}>Model: {event.model}</p>
        <p style={{ color: 'white' }}>VIN: {event.vin}</p>
        <button onClick={handleDelete} style={{ color: 'white', backgroundColor: 'red', border: 'none', padding: '5px 10px', marginTop: '10px' }}>
          Delete
        </button>
      </div>
    );
  };

  const CustomToolbar = toolbar => {
    const goToToday = () => {
      toolbar.onNavigate('TODAY');
    };

    const goToNext = () => {
      toolbar.onNavigate('NEXT');
    };

    const goToBack = () => {
      toolbar.onNavigate('PREV');
    };

    return (
      <div>
        <button onClick={goToToday} style={{ color: 'black' }}>
          Today
        </button>
        <button onClick={goToBack} style={{ color: 'black' }}>
          Back
        </button>
        <button onClick={goToNext} style={{ color: 'black' }}>
          Next
        </button>
      </div>
    );
  };

  return (
    <Container style={{
      height: '80vh',
      background: 'linear-gradient(to right, blue, gold)',
      color: 'white',
      padding: '20px'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Appointment Calendar</h2>
      <Calendar
        localizer={localizer}
        events={appointments.map(appointment => ({
          id: appointment.id,
          title: `${appointment.name}'s Appointment`,
          start: new Date(appointment.appointmentDate),
          end: new Date(appointment.appointmentDate),
          make: appointment.make,
          model: appointment.model,
          vin: appointment.vin,
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        views={{ agenda: true }}
        defaultView={Views.AGENDA}
        components={{
          agenda: {
            event: EventAgenda,
          },
          toolbar: CustomToolbar,
        }}
      />

      {loading && <p>Loading...</p>}
      {!loading && appointments.length === 0 && <p>No appointments booked at this time</p>}
    </Container>
  );
}

export default AppointmentCalendar;
