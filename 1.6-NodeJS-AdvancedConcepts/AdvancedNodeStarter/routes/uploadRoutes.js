const AWS = require('aws-sdk');
const uuid = require('uuid/v1');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin')

  const s3 = new AWS.S3({
    credentials: {
      accessKeyId: keys.accessKeyId,
      secretAccessKey: keys.secretAccessKey,
    },
    region: 'us-west-2',
  });

module.exports = app => {
    app.get('/api/upload', requireLogin, ( req, res ) => {
        const key = `${req.user.id}/${uuid()}.jpeg`;

        s3.getSignedUrl(
            'putObject', 
        {
            Bucket : 'myblogbuckettest',
            ContentType : 'image/jpeg',
            Key : key,
        }, 
        ( err, _url ) => {
            console.log(key, _url)
            res.send({ key, _url })
        })
    })
}