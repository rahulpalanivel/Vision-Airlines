import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'; 
import FlightCard from './FlightCard';

function FlightSearch() {
    const [flights, setFlights] = useState([]);
  useEffect(() => {
    const fetchedFlights = [
        {
          id: 1,
          departureDate: '2024-03-01',
          departureAirport: 'JFK',
          departureCity: 'New York',
          departureTime: '08:00 AM',
          arrivalAirport: 'LAX',
          arrivalCity: 'Los Angeles',
          arrivalTime: '11:00 AM',
          flightType: 'Airbus A320',
          totalTime: '6h',
          class: 'Economy',
          rate: '$200'
        },
        {
          id: 2,
          departureDate: '2024-03-01',
          departureAirport: 'SIN',
          departureCity: 'Singapore',
          departureTime: '09:00 PM',
          arrivalAirport: 'CHE',
          arrivalCity: 'Chennai',
          arrivalTime: '11:30 PM',
          flightType: 'Boeing 787',
          totalTime: '4h 30m',
          class: 'Business',
          rate: '$450'
        }
      ];
      
    setFlights(fetchedFlights);
  }, []);
  const sortFlights = (sortKey) => {
    // Creating a copy of the flights array to avoid directly mutating state
    const sortedFlights = [...flights].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
  
    // Updating the state with the sorted flights
    setFlights(sortedFlights);
  };
return (
    <div className=" bg-[#f9f9f9] text-black min-h-screen">
      <div className="flex justify-end">
        <button onClick={() => handleSort('departureDate')} className="btn">Sort by Date</button>
      </div>
      <div>
        {flights.map(flight => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
);
}
export default FlightSearch;