function ProductCard({ product, addToCart }) {
  return (
    <div className="card">

      <span className="badge">
        NEW
      </span>

      <div className="product-img">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <h3>{product.name}</h3>

      <small>{product.category}</small>

      <div>
        <span className="rating">
          ⭐ 4.5
        </span>
      </div>

      <div className="price">
        ₹{product.price.toLocaleString("en-IN")}
      </div>

      <button
        className="add"
        onClick={() => addToCart(product)}
      >
        ADD TO CART
      </button>

    </div>
  );
}

export default ProductCard;