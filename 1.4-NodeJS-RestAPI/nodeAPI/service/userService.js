const { formatMongoData } = require('../helper/dbHelper')
const User = require('../models/userModel.js')
const constants = require('../constants')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports.signup = async ({email, password}) => {
    try {
        const user = await User.findOne({ email });
        if(user){
            throw new Error(constants.userMessage.DULICATE_EMAIL);
        }

        password = await bcrypt.hash(password, 12);
        
        const newUser = new User({ email, password });

        let result = await newUser.save();

        return formatMongoData(result);

    } catch (error) {

        throw new Error(`Error ocurred in service:signup >>> ${error}`);

    }
}

module.exports.login = async ({email, password}) => {
    try {
        
        const user = await User.findOne({ email });
        if(!user){
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }

        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid){
            throw new Error(constants.userMessage.INVALID_PW);
        }

        const token = jwt.sign({ id : user._id }, process.env.SECRET_KEY || 'secretKey', { expiresIn : '1d'});

        return {token};

    } catch (error) {

        throw new Error(`Error ocurred in service:login >>> ${error}`);

    }
}