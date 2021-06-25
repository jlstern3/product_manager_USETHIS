import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteProduct from './DeleteProduct';

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const afterDeleteHandler = (deletedProductId) => {
        let filteredProductArray = products.filter((product) => {
            return product._id !== deletedProductId;
        });
        setProducts(filteredProductArray);
    }

    return (
        <div>
            <h1>All Movies</h1>
            <Link to={"/api/products/new"}><button>Create a New Product</button></Link>
            {
                products.map((product, index) => {
                    console.log("this is a new product: " + product.title);
                    return(
                        <div key={index}>
                        <Link to={"/api/products" + product._id}> {product.title}</Link>
                        <DeleteProduct
                            id={product._id}
                            afterDeleteHandler={afterDeleteHandler} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;