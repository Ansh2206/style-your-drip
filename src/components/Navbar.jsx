import { Link } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Style Your Drip</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart <span>{cartCount}</span>
        </Link>
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
        />
      </div>
    </nav>
  );
}

export default Navbar;
