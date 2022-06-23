module.exports = {
    defaultServerResponse: {
        status : 400,
        message : '',
        body : {},
    },
    productCreated: {
        PRODUCT_CREATED: 'Product created successfully!',
        PRODUCT_FETCHED: 'Product fetched successfully!',
        PRODUCT_UPDATED: 'Product updated successfully!',
        PRODUCT_DELETED: 'Product deleted successfully!', 
        PRODUCT_NOT_FOUND: 'Product not found',
    },
    userMessage : {
        USER_NOT_FOUND: 'User not founded',
        LOGIN_SUCCESS: 'Login success!',
        SIGNUP_SUCCESS: 'Signup success!',
        DULICATE_EMAIL: 'User already exists with given e-mail',
        INVALID_PW: 'Incorrect password',
    },
    requestValidationMessage : {
        BAD_REQUEST : 'Invalid fields',
        TOKEN_MISSING: 'Token is missing',
    },
    databaseMessage : {
        INVALID_ID : 'Invalid Id',
    }
}