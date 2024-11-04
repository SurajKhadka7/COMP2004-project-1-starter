import QuantityContainer from "./QuantityContainer.jsx";

const CartCard = ({ item, removeFromCart }) => {
  const total = (parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2);

  return (
    <div className="cart-card">
      <div className="cart-card-info">
        <img src={item.image} alt={item.productName} />
        <p>{item.productName}</p>
        <p>Price: {item.price}</p>
        <QuantityContainer quantity={item.quantity} />
      </div>
      <div className="cart-card-value">
        <p>
          <b>Total: ${total}</b>
        </p>
        <button className="cart-remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartCard;
