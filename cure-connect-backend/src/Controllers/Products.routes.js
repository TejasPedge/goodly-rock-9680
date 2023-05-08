const express = require('express');
const ProductsRoutes = express.Router();

const  {Auth_User} = require('../Middlewares/Authentication.middleware');

// Get all the products available in the database
ProductsRoutes.get('/', (req,res) => {


});

// Add products to the database, only admin can do this opearation;
ProductsRoutes.post('/create', (req,res) => {


});

//  Delete products from the database, only admin can do this
ProductsRoutes.delete('/delete/:id', (req,res) => {


});

// Update products data in the database, only admin can do this
ProductsRoutes.patch('/update/:id', (req,res) => {


});


module.exports = {ProductsRoutes};