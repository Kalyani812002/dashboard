import { useState } from "react";

function Products() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Product Added: " + name + " ₹" + price);

    setName("");
    setPrice("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Product</button>

      </form>

    </div>
  );
}

export default Products;