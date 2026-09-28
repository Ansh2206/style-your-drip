import { useState } from "react";

function AddProduct({ addProduct }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [image, setImage] = useState("");

  const handleImage = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!name || !price || !image) {
      alert("Please upload image, name and price!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
      category: category,
      image: image
    };

    addProduct(newProduct);

    setName("");
    setPrice("");
    setCategory("Electronics");
    setImage("");

    alert("Product Added!");
  };

  return (
    <div className="add-product">

      <h2>➕ Add Your Product</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="image">
          {image ? (
            <img
              id="preview"
              src={image}
              alt="Preview"
            />
          ) : (
            <div className="upload-box">
              Click to Upload Image
            </div>
          )}
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImage}
          hidden
        />

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Product Price ₹"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>

        <button type="submit">
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;