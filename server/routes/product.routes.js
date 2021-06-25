const ProductController = require('../controllers/product.controllers');

module.exports = function(app){
    //create product
    app.post('/api/products', ProductController.createProduct);
    //get all products
    app.get('/api/products', ProductController.getAllProducts);
    //get single product
    app.get('/api/products/:id', ProductController.getSingleProduct);
    //delete product
    app.delete('/api/products/:id', ProductController.deleteProduct);
    //update product
    app.put('/api/products/:id', ProductController.updateProduct);
}