import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Income = () => {
 const [incomes, setIncomes] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/incomes');
      setIncomes(result.data);
    };

    fetchData();
 }, []);

 return (
    <div>
      <h1>Income</h1>
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>{income.name}: ${income.amount}</li>
        ))}
      </ul>
    </div>
 );
};

export default Income;