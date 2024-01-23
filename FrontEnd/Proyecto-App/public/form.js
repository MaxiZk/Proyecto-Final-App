// Import necessary React components
import React, { useState } from 'react';

// Define the IncomeForm component
const IncomeForm = () => {
  // State to store the salary input
  const [salary, setSalary] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the server (replace 'your-server-endpoint' with the actual endpoint)
      const response = await fetch('http://localhost:3000/api/income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: parseFloat(salary) }),
      });

      if (response.ok) {
        console.log('Income saved successfully!');
      } else {
        console.error('Failed to save income.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section>
      <h2>Ingreso</h2>
      <p>Agrega tus ingresos mensuales para mantener un registro actualizado de tus finanzas personales.</p>

      <h1>Enter your salary:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          step="0.01"
          min="0"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

// Export the IncomeForm component
export default IncomeForm;
