import React, { useState } from "react";
import Card from "../../card/Card";
import styles from "./AddProduct.module.scss";

const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
];

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: null,
    category: "",
    brand: "",
    desc: "",
  });

  const handleInputChange = (e) => {};
  const handleImageChange = (e) => {};

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>
      <Card className={styles.card}>
        <form>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Product Image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "50%" }}>
                Uploading 50%
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              placeholder="Product Image"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />
            <input
              type="text"
              required
              name="imageURL"
              value={product.imageURL}
              disabled
            />
          </Card>
          <label>Product Price:</label>
          <input
            type="number"
            placeholder="Product Price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <select
            name="category"
            value={product.category}
            required
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              -- Select Product Category--
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
          <label>Product Company/Brand:</label>
          <input
            type="text"
            placeholder="Product Brand"
            required
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />
          <label>Product Description:</label>
          <textarea
            name="desc"
            required
            value={product.desc}
            cols="30"
            rows="10"
            onChange={(e) => handleInputChange(e)}
          ></textarea>
          <button className="--btn --btn-primary">Save Product</button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
