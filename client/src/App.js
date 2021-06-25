import './App.css';
import {Router} from '@reach/router';

import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import ProductForm from './components/ProductForm';
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <CreateProduct path = "/api/products/new" />
        <AllProducts path = "/api/products" />
        <ProductDetails path = "api/products/:id"/>
        <EditProduct path = "api/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
