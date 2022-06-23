const productService = require('../service/productService.js')
const constants = require('../constants')

module.exports.createProduct = async (req, res) => 
{   
    let response = {...constants.defaultServerResponse};
    try {
        const servRes = await productService.createProduct(req.body);
        console.log(servRes);
        response.status = 200;
        response.message = constants.productCreated.PRODUCT_CREATED;
        response.body= servRes;
    } catch (error) {
        console.error(`Something went wrong in createProduct >> ${error}`);
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}

module.exports.getAllProducts = async (req, res) => 
{   
    let response = {...constants.defaultServerResponse};
    try {
        const servRes = await productService.getAllProduts(req.query);
        console.log(servRes);
        response.status = 200;
        response.message = constants.productCreated.PRODUCT_FETCHED;
        response.body= servRes;
    } catch (error) {
        console.error(`Something went wrong in getAllProducts >> ${error}`);
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}

module.exports.getProductById = async (req, res) => 
{   
    let response = {...constants.defaultServerResponse};
    try {
        const servRes = await productService.getProductById(req.params);
        console.log(servRes);
        response.status = 200;
        response.message = constants.productCreated.PRODUCT_FETCHED;
        response.body= servRes;
    } catch (error) {
        console.error(`Something went wrong in getAllProducts >> ${error}`);
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}

module.exports.updateProduct = async (req, res) => 
{   
    let response = {...constants.defaultServerResponse};
    try {
        const servRes = await productService.updateProduct({
            id : req.params.id,
            updateInfo : req.body,
        });
        console.log(servRes);
        response.status = 200;
        response.message = constants.productCreated.PRODUCT_UPDATED;
        response.body= servRes;
    } catch (error) {
        console.error(`Something went wrong in updateProduct >> ${error}`);
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}

module.exports.deleteProduct = async (req, res) => 
{   
    let response = {...constants.defaultServerResponse};
    try {
        const servRes = await productService.deleteProduct(req.params);
        console.log(servRes);
        response.status = 200;
        response.message = constants.productCreated.PRODUCT_DELETED;
        response.body= servRes;
    } catch (error) {
        console.error(`Something went wrong in deleteProduct >> ${error}`);
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}