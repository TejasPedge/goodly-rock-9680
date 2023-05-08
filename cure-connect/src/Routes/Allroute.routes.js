import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Pageroute/Product";
import Singleproduct from "../Pageroute/Singleproduct";
import Login from "../Pageroute/Login";
import Signup from "../Pageroute/SignUp";
import Admin from "../Pageroute/Admin";
import {AddNewProduct} from "../Pageroute/AddNewProduct"
import {DeleteProduct} from "../Pageroute/DeleteProduct"

const AllRoutes = () => {
  return (
    <Routes>
      {/* Routes will be added */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<Singleproduct />}></Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/addProduct" element={<AddNewProduct/>}></Route>
    <Route path="/deleteProduct" element={<DeleteProduct/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
