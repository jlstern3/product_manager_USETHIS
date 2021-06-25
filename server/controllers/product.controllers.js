const Product = require('../models/product.models');

//Create Product
module.exports.createProduct = (req,res) => {
    console.log("Inside createProduct");
    console.log(req.body);
    Product.create(req.body)
        .then((newProduct) =>{
            console.log(newProduct);
            res.json(newProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//Get all products
module.exports.getAllProducts = (req, res) => {
    console.log("inside getAllProducts");
    Product.find({})
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//get single product
module.exports.getSingleProduct = (req, res) => {
    console.log("Inside getSingleProduct");
    Product.findById(req.params.id)
        .then((singleProduct) => {
            console.log(singleProduct);
            res.json(singleProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//delete product
module.exports.deleteProduct = (req,res) =>{
    console.log("Inside deleteProduct");
    Product.findByIdAndDelete(req.params.id)
        .then((deletedProduct) =>{
            console.log(deletedProduct);
            res.json(deletedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

//update product
module.exports.updateProduct = (req, res) =>{
    console.log("Inside updateProduct");
    Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then((updatedProduct) => {
            console.log(updatedProduct);
            res.json(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        })
}