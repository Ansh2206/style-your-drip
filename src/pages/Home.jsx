import { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

function Home({ products, addProduct, addToCart }) {

  const [search, setSearch] = useState("");
  const [currentCategory, setCurrentCategory] =
    useState("All");

  const filteredProducts = products.filter(
    (product) => {

      const categoryMatch =
        currentCategory === "All" ||
        product.category === currentCategory;

      const searchMatch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    }
  );

  return (
    <>
      <Hero />

      <div className="search-mobile">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Categories
        currentCategory={currentCategory}
        setCategory={setCurrentCategory}
      />

      <div className="container">

        <AddProduct
          addProduct={addProduct}
        />

        <div className="header">
          <h2>🔥 Deals of the Day</h2>
        </div>

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />

      </div>
    </>
  );
}

export default Home;