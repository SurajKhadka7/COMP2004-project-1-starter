//import { useState } from "react";

const NavBar = ({ cart, username = "username" }) => {
    const cartIsEmpty = cart.length === 0;
  
    return (
      <nav className="navbar">
        <p>Welcome, {username}!</p>
        <p>Grocery App</p>
        {/* change className */}
        <div className="cart-icon-container">
          <img
            src={
              cartIsEmpty
                ? "src/assets/cart-empty.png"
                : "src/assets/cart-full.png"
            }
            alt="cart-icon"
            className="cart-icon"
          />
          {!cartIsEmpty && <span className="cartDot"></span>}
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  