import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import ProductForm from './ProductForm';
import DeleteProduct from './DeleteProduct';

const EditProduct = (props) => {
    const {id} = props;
    const [errors, setErrors] = useState({});
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res)=> {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err=> console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault(e);
        axios.put("http://localhost:8000/api/products/" + id, product)
            .then((res)=> {
                if(res.data.errors) {
                    setErrors(res.data.errors)
                }
                else{
                    navigate('api/products/' + id)
                }
            })
            .catch(err=> console.log(err));
    }

    const afterDeleteHandler = () => {
        navigate('api/products');
    }

    return(
        <div>
            <ProductForm
                product = {product}
                setProduct = {setProduct}
                errors = {errors}
                handleSubmit = {handleSubmit}
                submitButtonLabel = {"Update Product"} />
            <DeleteProduct  
                id = {props.id}
                afterDeleteHandler = {afterDeleteHandler} />
            <Link to={"/api/products"}><button>Back to All Products</button></Link>     
        </div>
    )
}

export default EditProduct;