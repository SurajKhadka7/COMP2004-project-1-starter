import CartCard from "./CartCard";

const CartContainer = ({ cart, removeFromCart, emptyCart }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    
    <div className="cart-container">
      {cart.length === 0 ? (
        <p>No items.</p>
      ) : (
        <>
          <h2>Cart Items::{totalItems}</h2>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="cart-actions">
            <button className="empty-Button" onClick={emptyCart}>Empty Cart</button>
            <button className="buyButton">Buy Total: ${totalPrice.toFixed(2)}</button>
          </div>
        </>
      )}    
    </div>
  );
};
export default CartContainer;
