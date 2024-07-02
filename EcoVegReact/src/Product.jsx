import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/Product/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Product</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.P_Name}: {item.P_Desc}
            <img src={item.P_Image} alt={item.P_Name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
