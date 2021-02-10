import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import initialState from "./data/initialState";
const data = require("./data/products.json");

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(initialState);
  const [price, setPrice] = useState(0);
  const [send, setSend] = useState(false);

  // set prices when remove product from list
  useEffect(() => {
    submitPrices();
  }, [products]);

  // count up selected quantity
  const submitPrices = () => {
    const prices = [];
    if (cart.length === 0) {
      setPrice(0);
    }
    cart.map((el) => {
      prices.push(el.price * el.qty);
    });
    if (prices.length > 0) {
      const sum = prices.reduce((a, b) => a + b);

      setPrice(sum);
    }
  };

  // increment quantity
  const addProduct = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  //decrement quantity and finaly remove from list/cart
  const decreaseProduct = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (!exist) {
      return;
    }

    if (exist.qty === 1) {
      setCart(cart.filter((el) => el.id !== exist.id));
      setProducts(products.filter((el) => el.id !== exist.id));
    } else {
      setCart(
        cart.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el
        )
      );
    }
  };

  // remove product from cart/list
  const removeProduct = (product) => {
    const exist = products.find((item) => item.id === product.id);
    setProducts(products.filter((item) => item.id !== exist.id));
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // submit
  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert("masz pusty koszyk");
      return;
    }
    setSend(true);
  };

  return (
    <div className="wrapper">
      <Header proceedToCheckout={proceedToCheckout} />
      {!send ? (
        <div className="row container">
          <ProductsList
            products={products}
            addProduct={addProduct}
            cart={cart}
            submitPrices={submitPrices}
            decreaseProduct={decreaseProduct}
            removeProduct={removeProduct}
          />
          <Cart price={price} proceedToCheckout={proceedToCheckout} />
        </div>
      ) : (
        <div className="success">
          Your order has been submitted successfully!
          {cart.map((el) => (
            <div>
              {el.name} x {el.qty}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
