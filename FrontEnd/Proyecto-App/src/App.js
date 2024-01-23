import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Income from './components/Income';
import Investments from './components/Investments';
import Wallet from './componentes/Wallet';

const App = () => {
 return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/income" component={Income} />
        <Route path="/investments" component={Investments} />
        <Route path="/wallet" component={Wallet}/>
      </Switch>
    </Router>
 );
};

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
         <Wallet walletAmount={walletAmount} onClick={openWalletModal} />
         <WalletModal
           isOpen={isWalletModalOpen}
           onRequestClose={closeWalletModal}
           onWalletUpdate={handleWalletUpdate}
         />
       </div>
    );

export default App;