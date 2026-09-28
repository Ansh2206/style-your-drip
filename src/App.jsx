import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
    },

    {
      id: 2,
      name: "Headphones",
      price: 2500,
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },

    {
      id: 3,
      name: "Sneakers",
      price: 1999,
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=80"
    }
  ]);

  const [cart, setCart] = useState([]);

  // Add new product
  const addProduct = (newProduct) => {

    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct
    ]);
  };

  // Add product to cart
  const addToCart = (product) => {

    setCart((previousCart) => {

      const existing =
        previousCart.find(
          (item) => item.id === product.id
        );

      if (existing) {

        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          qty: 1
        }
      ];
    });
  };

  // Change quantity
  const changeQuantity = (id, amount) => {

    setCart((previousCart) => {

      return previousCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty + amount
              }
            : item
        )
        .filter((item) => item.qty > 0);
    });
  };

  // Checkout
  const checkout = () => {

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Order placed successfully!");

    setCart([]);
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              products={products}
              addProduct={addProduct}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              changeQuantity={changeQuantity}
              checkout={checkout}
            />
          }
        />

      </Routes>
    </>
  );
}

export default App;