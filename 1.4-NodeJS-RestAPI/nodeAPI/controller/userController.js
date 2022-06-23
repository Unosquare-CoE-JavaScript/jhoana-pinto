const userService = require('../service/userService.js')
const constants = require('../constants')

module.exports.signup = async (req, res) => 
{   
    let response = {...constants.defaultServerResponse};
    try {
        const servRes = await userService.signup(req.body);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body= servRes;
    } catch (error) {
        console.error(`Something went wrong in signup >> ${error}`);
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}


module.exports.login = async (req, res) => 
{   
    let response = {...constants.defaultServerResponse};
    try {
        const servRes = await userService.login(req.body);
        response.status = 200;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body= servRes;
    } catch (error) {
        console.error(`Something went wrong in login >> ${error}`);
        response.message = error.message;
    }
    
    return res.status(response.status).send(response);
}
/* module.exports.getAllProducts = async (req, res) => 
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
} */