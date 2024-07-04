import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch Customers
    axios.get('http://127.0.0.1:8000/customers/')  // Update the URL if necessary
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customers:', error));
  },[]);

  return (
    <div className="App">
      <h1>Customers</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
