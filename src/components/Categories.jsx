function Categories({ currentCategory, setCategory }) {
  const categories = ["All", "Electronics", "Fashion", "Home"];

  return (
    <section className="categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category ${
            currentCategory === category ? "active" : ""
          }`}
          onClick={() => setCategory(category)}
        >
          <div>
            {category === "All" && "🛍️"}
            {category === "Electronics" && "💻"}
            {category === "Fashion" && "👟"}
            {category === "Home" && "🏠"}
          </div>
          {category}
        </button>
      ))}
    </section>
  );
}

export default Categories;
