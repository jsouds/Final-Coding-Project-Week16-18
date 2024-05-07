import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Appointment from './appointment';
import AppointmentCalendar from './appointmentCalendar';
import Confirmation from './confirmation';

const AppointmentsPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointmentCalendar" element={<Calendar />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppointmentsPage;
