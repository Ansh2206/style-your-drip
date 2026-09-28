import { useState } from "react";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";

function Products({ products, addToCart }) {

  const [category, setCategory] =
    useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );

  return (
    <div className="container">

      <div className="header">
        <h2>🛍️ All Products</h2>
      </div>

      <Categories
        currentCategory={category}
        setCategory={setCategory}
      />

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

    </div>
  );
}

export default Products;