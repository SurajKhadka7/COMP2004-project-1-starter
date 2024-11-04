import { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
import products from "../data/products";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      return existingProduct
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const emptyCart = () => setCart([]);

  return (
    <div>
      <NavBar cart={cart} />
      <div className="groceries-app-container">
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer
          cart={cart}
          removeFromCart={removeFromCart}
          emptyCart={emptyCart}
        />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
