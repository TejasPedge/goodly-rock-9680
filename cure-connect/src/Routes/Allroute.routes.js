<<<<<<< HEAD
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './../Pages/Home';
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../Pageroute/Product";
import Singleproduct from "../Pageroute/Singleproduct";
import Login from "../Pageroute/Login";
import Signup from "../Pageroute/SignUp";
>>>>>>> c7e2a266d4ba13f3cb106b7debb9bd92ead39839

const AllRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD

        {/* Routes will be added */}
        <Route path = '/' element = {<Home/>}></Route>

=======
      {/* Routes will be added */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<Singleproduct />}></Route>
>>>>>>> c7e2a266d4ba13f3cb106b7debb9bd92ead39839
    </Routes>
  );
};

export default AllRoutes;
