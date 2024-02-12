import React from 'react';
import './FormStyles.css';

const PassengerForm = ({ passenger, onChange, onRemove }) => {
  return (
    <div>
      <h3>Passenger Details</h3>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={passenger.name}
          onChange={onChange}
          placeholder="Enter name"
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={passenger.email}
          onChange={onChange}
          placeholder="Enter email"
          required
        />
      </label>

      <label>
        Source:
        <input
          type="text"
          name="source"
          value={passenger.source}
          onChange={onChange}
          placeholder="Enter source"
          required
        />
      </label>

      <label>
        Destination:
        <input
          type="text"
          name="destination"
          value={passenger.destination}
          onChange={onChange}
          placeholder="Enter destination"
          required
        />
      </label>

      <label>
        Passenger Class:
        <select
          name="passengerClass"
          value={passenger.passengerClass}
          onChange={onChange}
          required
        >
          <option value="BusinessClass">Business Class</option>
          <option value="Sleeper">Sleeper</option>
          <option value="AC2Tier">AC 2 Tier</option>
          <option value="AC3Tier">AC 3 Tier</option>
        </select>
      </label>

      {onRemove && (
        <button type="button" onClick={onRemove}>
          Remove Passenger
        </button>
      )}
    </div>
  );
};

export default PassengerForm;
