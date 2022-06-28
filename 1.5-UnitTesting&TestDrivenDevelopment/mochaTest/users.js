const request = require('request')

module.exports = function getUsers(cb){
    request.get('http://www.mysite.com/api/users', (err, res) => {
        cb(JSON.parse(res.body));
    })
}