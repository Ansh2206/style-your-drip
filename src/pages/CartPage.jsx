import Cart from "../components/Cart";

function CartPage({
  cart,
  changeQuantity,
  checkout
}) {

  return (
    <div className="container">

      <Cart
        cart={cart}
        changeQuantity={changeQuantity}
        checkout={checkout}
      />

    </div>
  );
}

export default CartPage;