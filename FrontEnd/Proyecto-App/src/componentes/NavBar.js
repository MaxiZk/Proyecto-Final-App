import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/income">Income</Link>
        </li>
        <li>
          <Link to="/investments">Investments</Link>
        </li>
        <li>
        <Link to="/wallet">Wallet</Link>
        </li>
      </ul>
    </nav>
 );
};

export default Navbar;