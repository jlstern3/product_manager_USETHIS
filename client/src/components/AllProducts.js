import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from '@reach/router';
import DeleteProduct from './DeleteProduct';
import { Card, CardContent } from '@material-ui/core';


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
            <Card>
                <CardContent>
                    <h3>All Movies</h3>
                </CardContent>
            </Card>

            <Link to={"/api/products/new"}><button className = "btnNew">Create a New Product</button></Link>
            {
                products.map((product, index) => {
                    console.log("this is a new product: " + product.title);
                    return(
                        
                        <div key={index}>
                            <Link to={"/api/products/" + product._id}> {product.title}</Link>
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