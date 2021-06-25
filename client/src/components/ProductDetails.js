import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteProduct from './DeleteProduct';

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
            <Link to = {"/api/products"}><button>Back to All Products</button></Link>
            <Link to = {"/api/products/" + props.id + "/edit"}><button>Edit {product.title}</button></Link>
            <DeleteProduct id = {props.id} afterDeleteHandler = {afterDeleteHandler}/>
        </div>
    )
};

export default ProductDetails;