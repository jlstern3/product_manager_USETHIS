import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteProduct from './DeleteProduct';
import { Button } from '@material-ui/core';

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const {id} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => { console.log(err)});
    }, [id]);

    const afterDeleteHandler = () => {
        navigate('/api/products');
    }

    return(
        <div>
            <h3>Product Details</h3>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to = {"/api/products"}><Button>Back to All Products</Button></Link>
            <Link to = {"/api/products/" + props.id + "/edit"}><Button>Edit {product.title}</Button></Link>
            <DeleteProduct id = {props.id} afterDeleteHandler = {afterDeleteHandler}/>
        </div>
    )
};

export default ProductDetails;