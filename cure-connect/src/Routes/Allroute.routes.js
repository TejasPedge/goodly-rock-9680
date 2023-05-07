import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Product from '../Pageroute/Product';
import Singleproduct from '../Pageroute/Singleproduct';

const AllRoutes = () => {
return (
  <Routes>
    {/* Routes will be added */}
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/product/:id" element={<Singleproduct />}></Route>
  </Routes>
);
}

export default AllRoutes