import React from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const ProductForm = (props) => {

    const { errors, product, setProduct, handleSubmit, submitButtonLabel } = props;

    const inputChange = (e) => {
        console.log("input name: " + e.target.name);
        console.log("input value:" + e.target.value);
    
        let newProductObject = {...product};
        newProductObject[e.target.name] = e.target.value;
        setProduct(newProductObject);
    }
    
    
    return(
        <div>
            <h1>Product Form</h1>
            <form onSubmit = {(e) => handleSubmit(e)}>
                <label>Title: </label>
                {
					errors.title ?
						<span className="error-text">{errors.title.message}</span>
						: null
				}
                <input
                type = "text"
                name = "title"
                value = {product.title}
                onChange = {(e) => inputChange(e)}/>

                <label>Price: </label>
                {
					errors.price ?
						<span className="error-text">{errors.price.message}</span>
						: null
				}
                <input
                type = "number"
                name = "price"
                value = {product.price}
                onChange = {(e) => inputChange(e)}/>

                <label>Description: </label>
                {
					errors.description ?
						<span className="error-text">{errors.description.message}</span>
						: null
				}
                <input
                type = "text"
                name = "description"
                value = {product.description}
                onChange = {(e) => inputChange(e)}/>

                <button type = "submit">{submitButtonLabel}</button>

            </form>
        </div>
    )
}

export default ProductForm;