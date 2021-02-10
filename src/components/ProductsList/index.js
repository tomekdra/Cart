import React, { useState } from "react";
import "./productsList.scss";
import xImg from "../../images/x-img.png";
import productImg from "../../images/headphones.png";
import editImg from "../../images/edit-img.png";

const ProductsList = (props) => {
  const {
    products,
    addProduct,
    submitPrices,
    decreaseProduct,
    cart,
    removeProduct,
  } = props;

  return (
    <div className="box border col-2">
      <div className="row divider margin-1 bold headers">
        <div className="whiteSpace"></div>
        <div className="productsName">Product Name</div>
        <div className="price">Unit Price</div>
        <div className="qty">Qty</div>
      </div>
      {/* map products list*/}
      {products.map((product) => (
        <div className="row margin-1 product center" key={product.id}>
          <div className="deleteProduct row center">
            <img
              src={xImg}
              className="pointer"
              onClick={() => removeProduct(product)}
            />
          </div>

          <div className="img row align-center">
            <img src={productImg} />
          </div>
          <div className="productsName row align-center ">{product.name}</div>
          <div className="price row align-center ">${product.price}</div>
          <div className="qty row align-center">
            <button
              className="countBtn"
              onClick={() => decreaseProduct(product)}
            >
              -
            </button>

            <div className="counter row center">
              {cart.map((prod) => (prod.id === product.id ? prod.qty : null))}
            </div>

            <button className="countBtn" onClick={() => addProduct(product)}>
              +
            </button>
            <img
              src={editImg}
              className="pointer"
              onClick={() => submitPrices()}
            />
          </div>
        </div>
      ))}
      <div className="margin-1 updateBtnPos">
        <button onClick={() => submitPrices()}>Update Shopping Cart</button>
      </div>
    </div>
  );
};

export default ProductsList;
