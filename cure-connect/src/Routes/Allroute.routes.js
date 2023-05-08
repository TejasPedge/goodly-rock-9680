import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './../Pages/Home';
import Product from "../Pageroute/Product";
import Singleproduct from "../Pageroute/Singleproduct";
import Login from "../Pageroute/Login";
import Signup from "../Pageroute/SignUp";
import CartPage from "../Pageroute/CartPage";

const AllRoutes = () => {
  return (
    <Routes>

        {/* Routes will be added */}
        <Route path = '/' element = {<Home/>}></Route>

      {/* Routes will be added */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<Singleproduct />}></Route>
    </Routes>
  );
};

export default AllRoutes;
