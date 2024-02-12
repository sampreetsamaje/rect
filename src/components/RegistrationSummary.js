import React from 'react';
import './FormStyles.css';

const RegistrationSummary = ({ passengers, calculateFare }) => {
  return (
    <div>
      <h2>Registration done successfully!</h2>
      {passengers.map((passenger, index) => (
        <div key={index}>
          <p>Name: {passenger.name}</p>
          <p>Email: {passenger.email}</p>
          <p>Source: {passenger.source}</p>
          <p>Destination: {passenger.destination}</p>
          <p>Class: {passenger.passengerClass}</p>
          <p>Total Fare: ${calculateFare(passenger)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RegistrationSummary;
