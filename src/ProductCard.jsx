import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity === 0) {
      alert("Write something here");
    } else {
      addToCart(product, quantity);
    }
  };

  return (
    <div className="productItem">
      <h3>{product.productName}</h3>
      <img src={product.image} alt="" />
      <p>{product.brand}</p>
      <div>
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 0}
        >
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
      <p>{product.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
