const AWS = require('aws-sdk');
AWS.config.update({
  region: 'ap-south-1'
});

const s3 = new AWS.S3();

exports.handler = async () => {
  const fileContent = 'hellooooo, this is testing';
  const params = {
    Bucket: 'YOUR-BUCKET-NAME',
    Key: 'data/test.txt',
    ACL: 'bucket-owner-full-control',
    Body: fileContent,
    ContentEncoding: 'utf8'
  };

  try {
    await s3.putObject(params).promise();
    console.log('Successfully uploaded file to S3');
  } catch (error) {
    console.error('Error:', error);
  }
};
