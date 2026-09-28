function Cart({ cart, changeQuantity, checkout }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹{item.price.toLocaleString("en-IN")}</p>
          </div>

          <div className="qty">
            <button
              type="button"
              onClick={() => changeQuantity(item.id, -1)}
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              type="button"
              onClick={() => changeQuantity(item.id, 1)}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="remove"
            onClick={() => changeQuantity(item.id, -item.qty)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="total">
        <strong>Total: ₹{total.toLocaleString("en-IN")}</strong>

        <button type="button" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
