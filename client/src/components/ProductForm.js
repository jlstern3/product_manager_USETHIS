import React from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

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
            <Paper elevation = {3} style={styles.paper}>
            <h3>Product Form</h3>
            <form onSubmit = {(e) => handleSubmit(e)}>
            <FormControl variant="outlined" style={styles.input}>
            <InputLabel>Title: </InputLabel>
                {
					errors.title ?
						<span className="error-text">{errors.title.message}</span>
						: null
				}
                <OutlinedInput 
                type = "text"
                name = "title"
                value = {product.title}
                onChange = {(e) => inputChange(e)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Price: </InputLabel>
                {
					errors.price ?
						<span className="error-text">{errors.price.message}</span>
						: null
				}
                <OutlinedInput 
                type = "number"
                name = "price"
                value = {product.price}
                onChange = {(e) => inputChange(e)}/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                <InputLabel>Description: </InputLabel>
                {
					errors.description ?
						<span className="error-text">{errors.description.message}</span>
						: null
				}
                <OutlinedInput 
                type = "text"
                name = "description"
                value = {product.description}
                onChange = {(e) => inputChange(e)}/>
                </FormControl>
                <Button type = "submit">{submitButtonLabel}</Button>

            </form>

        </Paper>
    )
}

export default ProductForm;