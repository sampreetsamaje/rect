import React, { useState } from 'react';
import PassengerForm from './components/PassengerForm';
import RegistrationSummary from './components/RegistrationSummary';
import './App.css';

const App = () => {
  const [passengers, setPassengers] = useState([
    { name: '', email: '', source: '', destination: '', passengerClass: 'BusinessClass' },
  ]);

  const [registrationDone, setRegistrationDone] = useState(false);

  const calculateFare = (passenger) => {
    return 100; 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();


    const requiredFields = passengers[0];
    const isFormValid = Object.values(requiredFields).every((field) => field !== '');

    if (isFormValid) {
      setRegistrationDone(true);
    } else {
      alert('Please fill in all the required fields for all passengers.');
    }
  };

  const handleInputChange = (e, passengerIndex) => {
    const { name, value, type, checked } = e.target;
    setPassengers((prevPassengers) =>
      prevPassengers.map((passenger, index) =>
        index === passengerIndex
          ? { ...passenger, [name]: type === 'checkbox' ? checked : value }
          : passenger
      )
    );
  };

  const removePassenger = (passengerIndex) => {
    setPassengers((prevPassengers) => {
      const updatedPassengers = [...prevPassengers];
      updatedPassengers.splice(passengerIndex, 1);
      return updatedPassengers;
    });
  };

  const addPassenger = () => {
    setPassengers((prevPassengers) => [
      ...prevPassengers,
      { name: '', email: '', source: '', destination: '', passengerClass: 'BusinessClass' },
    ]);
  };

  <br></br>

  return (
    <div className="App">
      <h1>Train Reservation System</h1>
      {registrationDone ? (
        <RegistrationSummary passengers={passengers} calculateFare={calculateFare} />
      ) : (
        <form onSubmit={handleFormSubmit}>
          {passengers.map((passenger, index) => (
            <PassengerForm
              key={index}
              passenger={passenger}
              onChange={(e) => handleInputChange(e, index)}
              onRemove={() => removePassenger(index)}
            />
          ))}
         <br></br>
          <button type="button" onClick={addPassenger}>
            Add Passenger
          </button>
          <br></br>

          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
};

export default App;
