import React from 'react';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
const NavBar = () => {
  return (
    <div className="navbar-container">
      <p>
        <a href="/">
          {' '}
          <img src="https://img.icons8.com/dotty/80/null/sell.png" />
        </a>
      </p>
      <button type="button" className="cart-icon">
       <a href='/products'> <AiOutlineUser/></a>
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default NavBar;
