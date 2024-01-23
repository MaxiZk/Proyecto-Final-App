import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/NavBar.js';
import Home from './componentes/Home.js';
import Income from './componentes/Income.js';
import Investments from './componentes/Investment.js';
import Wallet from './componentes/Wallet.js';

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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/income" component={Income} />
          <Route path="/investments" component={Investments} />
          <Route path="/wallet" component={() => <Wallet walletAmount={walletAmount} onClick={openWalletModal} />} />
        </Switch>
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
