const mongoose = require('mongoose');

module.exports = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
        console.log('Success')
    } catch (error) {
        console.error(`Db connectivity error: ${error}`);
        throw new Error(error)
    }
}