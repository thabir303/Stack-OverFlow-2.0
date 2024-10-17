const AWS = require('aws-sdk');

// MinIO configuration (replace these with your own)
const s3 = new AWS.S3({
  endpoint: 'http://localhost:9000', // MinIO endpoint
  accessKeyId: 'minioadmin',         // Default MinIO credentials
  secretAccessKey: 'minioadmin',
  s3ForcePathStyle: true,            // Required for MinIO
});

module.exports = s3;
