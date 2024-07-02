import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Customer/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Items</h1>
      <ul>
        {Array.isArray(items) && items.map(item => (
          <li key={item.id}>{item.Email}: {item.Contact} <img src={item.Image} alt="x" /></li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
