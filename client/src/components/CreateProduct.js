import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import ProductForm from './ProductForm';

const CreateProduct = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    });

    const[errors, setErrors] = useState({});
    
    const submitHandler = (e) =>
    e.preventDefault();
    axios.post("http://localhost:8000/api/products", product)
        .then((res) => {
            console.log(res.data);
            if(res.data.errors) {
                setErrors(res.data.errors);
            }
            else{
                navigate('/api/products');
            }
        })
        .catch (err => {console.log(err);});

    return(
        <div>
            <h1>Create Product</h1>
            <ProductForm 
            product = {product}
            setProduct = {setProduct}
            submitHandler = {submitHandler}
            submitButtonLabel = {"Create Product"}
            />
        </div>
    )
}

export default CreateProduct;