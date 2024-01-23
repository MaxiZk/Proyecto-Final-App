import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// State to manage wallet amount and income
const Index = () => {
  const [walletAmount, setWalletAmount] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);

  // Function to update the wallet amount
  const updateWallet = (amount) => {
    setWalletAmount(amount);
  };

  // Function to update the income amount
  const updateIncome = (amount) => {
    setIncomeAmount(amount);
  };

  return (
    <React.StrictMode>
      <App
        walletAmount={walletAmount}
        incomeAmount={incomeAmount}
        updateWallet={updateWallet}
        updateIncome={updateIncome}
      />
    </React.StrictMode>
  );
};

// Render the Index component to the root element in the HTML file
ReactDOM.render(<Index />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);