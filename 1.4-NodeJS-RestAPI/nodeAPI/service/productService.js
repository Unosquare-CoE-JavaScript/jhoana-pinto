const Product = require('../models/productModel.js')
const { formatMongoData, checkObjectId } = require('../helper/dbHelper')
const constants = require('../constants')

module.exports.createProduct = async serviceData => {
    try {
        let product = new Product({ ...serviceData });
        let result = await product.save();
        return formatMongoData(result);
    } catch (error) {
        throw new Error(`Error ocurred in service:createProduct >>> ${error}`);
    }
}

module.exports.getAllProduts = async ({ skip = 0, limit = 10 }) => {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));   // It'll look under any condition to get all products availables
        return formatMongoData(products);
    } catch (error) {
        throw new Error(`Error ocurred in service:getAllProducts >>> ${error}`);
    }
}

module.exports.getProductById = async ({ id }) => {
    try {

        checkObjectId(id);
        let product = await Product.findById(id)

        if(!product){
            throw new Error (constants.productCreated.PRODUCT_NOT_FOUND)
        }
        return formatMongoData(product);

    } catch (error) {

        throw new Error(error);
    
    }
}

module.exports.updateProduct = async ({ id, updateInfo }) => {
    try {

        checkObjectId(id);
        let product = await Product.findOneAndUpdate(
            { id : id }, 
            updateInfo, 
            { new : true }
        )

        if(!product){
            throw new Error (constants.productCreated.PRODUCT_NOT_FOUND)
        }
        return formatMongoData(product);

    } catch (error) {

        throw new Error(error);
    
    }
}

module.exports.deleteProduct = async ({id}) => {
    try {

        checkObjectId(id);
        let product = await Product.findByIdAndDelete(id);

        if(!product){
            throw new Error (constants.productCreated.PRODUCT_NOT_FOUND)
        }
        return formatMongoData(product);

    } catch (error) {

        throw new Error(error);
    
    }
}