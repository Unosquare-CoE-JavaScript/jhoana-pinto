const joinSchemaValidation = require('../middleware/joiSchemaValidation.js');
const productController = require('../controller/productController.js');
const tokenValidation = require('../middleware/tokenValidation');
const productSchema = require('../apiSchema/productSchema');
const express = require('express');
const router = express.Router();

router.post('/',
    tokenValidation.validateToken,
    joinSchemaValidation.validateBody(productSchema.createProductSchema), 
    productController.createProduct);

router.get('/', 
    tokenValidation.validateToken,
    joinSchemaValidation.validateQueryParams(productSchema.getAllProductsSchema),    
    productController.getAllProducts);

router.get('/:id',
    tokenValidation.validateToken,
    productController.getProductById)

router.put('/:id',
    tokenValidation.validateToken,
    joinSchemaValidation.validateBody(productSchema.updateProductSchema),
    productController.updateProduct);

router.delete('/:id',
    tokenValidation.validateToken,
    productController.deleteProduct);

module.exports = router;