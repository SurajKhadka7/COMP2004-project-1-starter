const QuantityContainer = ({ quantity, increaseQuantity, decreaseQuantity }) => {
    return (
      
      <div className="quantity-container">
        <button onClick={decreaseQuantity} disabled={quantity <= 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}> + </button>
      </div>
    );
  };
  
  export default QuantityContainer;
  