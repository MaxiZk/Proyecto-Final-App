import React, { useState } from 'react';
import Modal from 'react-modal';

const WalletModal = ({ isOpen, onRequestClose }) => {
 const [walletAmount, setWalletAmount] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    // Realiza una solicitud HTTP para guardar el saldo del monedero
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const amount = parseFloat(input.value);

      try {
          // Make a POST request to the server
          const response = await fetch('your-api-endpoint', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ amount }),
          });

          if (response.ok) {
              console.log('Amount saved successfully!');
          } else {
              console.error('Failed to save amount.');
          }
      } catch (error) {
          console.error('Error:', error);
      }

      // Check if window.opener is available before using postMessage
      if (window.opener) {
          window.opener.postMessage({ type: 'updateAmount', amount }, '*');
      } else {
          console.error('window.opener is null or undefined');
      }

      window.close();
  });
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