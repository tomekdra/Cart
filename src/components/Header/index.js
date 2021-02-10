import React from "react";

const Header = ({ proceedToCheckout }) => {
  return (
    <div className="row space-bt align-center padding">
      <h1>
        <a href="/">Shopping Cart</a>
      </h1>
      <button style={{ fontWeight: "normal" }} onClick={proceedToCheckout}>
        Proceed to checkout
      </button>
    </div>
  );
};

export default Header;
