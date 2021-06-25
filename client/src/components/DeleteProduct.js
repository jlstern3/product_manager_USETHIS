import React from 'react';
import axios from 'axios';

const DeleteProduct = (props) => {
	const { id, afterDeleteHandler } = props;

	const deleteHandler = (e, id) => {
		e.preventDefault();

		axios.delete("http://localhost:8000/api/products/" + id)
			.then((res) => {
				console.log(res.data);
				afterDeleteHandler(id);  // unique things that the parent component wants to do now!
			})
			.catch((err) => {
				console.log(err);
			})
	}

	return (
		<button className="deleteBtn" onClick={ (e) => deleteHandler(e, id) }>Delete Product</button>
	)
}

export default DeleteProduct;
