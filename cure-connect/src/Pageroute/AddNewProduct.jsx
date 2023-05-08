import React, { useState } from "react";

import styles from "../styles/admin.module.css";
import { addNewProduct } from "../allApi";
import {SideBar} from "../Components/SideBarAdmin";

export const AddNewProduct = () => {
  const initialProduct = {
    name: "",
    image: "",
    discription: "",
    price: 0,
    category: "",
  };


  const [product, setProduct] = useState(initialProduct);
  

  const handelOnChange = (e) => {
    const value = e.target.name == "price" ? +e.target.value : e.target.value;
    const { name } = e.target;
    setProduct({ ...product, [name]: value });
  };



  const handelAddProduct = (e) => {
    e.preventDefault();
    addNewProduct(product);
    alert("New Product Added Successfully");
    setProduct(initialProduct);
  };



  return (
    <div>
      <h1 className={styles.addnEwTit}>Add New Product</h1>

      <div className={styles.addNewMain}>
        <SideBar />
      <div className={styles.addProMainBox}>
        <form onSubmit={handelAddProduct}>
          <h5>Product Title</h5>
          <input
            type="text"
            value={product.name}
            name="name"
            onChange={handelOnChange}
            required
            placeholder="Please Enter Product Title"
          />
          <br />

          <h5>Product Image URL</h5>
          <input
            type="text"
            value={product.image}
            name="image"
            onChange={handelOnChange}
            required
            placeholder="Please Enter Product Image URL"
          />
          <br />

          <h5>Add Product Discription</h5>
          <input
            type="text"
            value={product.discription}
            name="discription"
            onChange={handelOnChange}
            required
            placeholder="Please Enter Product Description"
          />
          <br />

          <h5>Product Price</h5>
          <input
            type="number"
            value={product.price}
            name="price"
            onChange={handelOnChange}
            required
            placeholder="Please Enter Product Price"
          />
          <br />

          <select
            name="category"
            onChange={handelOnChange}
            value={product.category}
            required
          >
            <option>Select Product Category</option>
            <option value="grocery">Grocery</option>
            <option value="fashion">Fashion</option>
            <option value="mobile">Mobile</option>
            <option value="home">Home</option>
          </select>

          <br />

          <button type="submit" className={styles.addProBtn}>
            Add To Server
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};


