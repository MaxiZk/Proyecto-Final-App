import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <nav>
      <ul>
        <li>
          <Link to="./Home.js">Home</Link>
        </li>
        <li>
          <Link to="./Income.js">Income</Link>
        </li>
        <li>
          <Link to="./Investment.js">Investments</Link>
        </li>
        <li>
        <Link to="./Wallet.js">Wallet</Link>
        </li>
      </ul>
    </nav>
 );
};

export default Navbar;