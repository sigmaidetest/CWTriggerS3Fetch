let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {

    console.log(event);
    s3.listObjects({
        'Bucket': 'com.slappforge.sigma.test.318300609668.udith.us-east-1',
        'MaxKeys': 10,
        'Prefix': ''
    }).promise()
        .then(data => {
            console.log(data);           // successful response
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    callback(null, 'Successfully executed');
}