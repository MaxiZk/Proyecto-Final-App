import React, { useState } from 'react';
import Modal from 'react-modal';

const IncomeModal = ({ isOpen, onRequestClose }) => {
 const [incomeName, setIncomeName] = useState('');
 const [incomeAmount, setIncomeAmount] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    // Realiza una solicitud HTTP para guardar el ingreso
    onRequestClose();
 };

 return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Income name"
          value={incomeName}
          onChange={(e) => setIncomeName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Income amount"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <button type="submit">Add Income</button>
      </form>
    </Modal>
 );
};

export default IncomeModal;