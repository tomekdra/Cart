import React from "react";
import "./cart.scss";
const Cart = ({ price, proceedToCheckout }) => {
  return (
    <div className="col-1">
      <div className="shippingBox row space-bt bold">
        <span>SHIPPING:</span>
        <span>${price <= 100 ? "23.80" : "0"}</span>
      </div>
      <div className="totalBox">
        <div className="cartBox bold">CART TOTALS</div>
        <div className="row totals divider space-bt">
          <p>Subtotal: </p>
          <p className="black bold">${price ? price.toFixed(2) : 0}</p>
        </div>
        <div className="row totals margin-1 space-bt">
          <p>Grand Total: </p>
          <p className="black bold bigger">
            $
            {price <= 100
              ? (23.8 + price).toFixed(2)
              : price === 0
              ? 0
              : price.toFixed(2)}
          </p>
        </div>
        <div className="row center">
          <button onClick={proceedToCheckout}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
