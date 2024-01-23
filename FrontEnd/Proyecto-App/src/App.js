import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IncomeForm from '../public/form.js';
import Navbar from './componentes/NavBar.js';
import Home from './componentes/Home.js';
import Income from './componentes/Income.js';
import Investments from './componentes/Investment.js';
import Wallet from './componentes/Wallet.js';
import WalletModal from './componentes/Wallet.js'; 

const App = () => {
  const [walletAmount, setWalletAmount] = useState(0);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const openWalletModal = () => {
    setIsWalletModalOpen(true);
  };

  const closeWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  const handleWalletUpdate = (updatedWalletAmount) => {
    setWalletAmount(updatedWalletAmount);
    closeWalletModal();
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/income" element={<Income/>} />
          <Route path="/investments" element={<Investments/>} />
          <Route path="/wallet" element={<Wallet/>} />
        </Routes>
      </Router>
      <WalletModal
        isOpen={isWalletModalOpen}
        onRequestClose={closeWalletModal}
        onWalletUpdate={handleWalletUpdate}
      />
    </div>
  );
};

export default App;
