import ProductCard from "./ProductCard";

const ProductsContainer = ({ products, addToCart }) => {
  return (
    
    <div className="productsContainer">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsContainer;
