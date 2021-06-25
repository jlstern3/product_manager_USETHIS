import './App.css';
import {Router} from '@reach/router';

import React from 'react';
import CreateProduct from './components/CreateProduct';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import EditProduct from './components/EditProduct';
import {Paper} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Paper elevation = {10}>
      <h1>Product Manager</h1>
      </Paper>
      <Router>
        <CreateProduct path = "/api/products/new" />
        <AllProducts default path = "/api/products" />
        <ProductDetails path = "api/products/:id"/>
        <EditProduct path = "api/products/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
