import React, { useState } from 'react';
import Modal from 'react-modal';

const WalletModal = ({ isOpen, onRequestClose }) => {
 const [walletAmount, setWalletAmount] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    // Realiza una solicitud HTTP para guardar el saldo del monedero
    onRequestClose();
 };

 return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Update Wallet Amount</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Wallet amount"
          value={walletAmount}
          onChange={(e) => setWalletAmount(e.target.value)}
        />
        <button type="submit">Update Wallet</button>
      </form>
    </Modal>
 );
};

export default WalletModal;