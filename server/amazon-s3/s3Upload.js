const fs = require("fs");
const path = require("path");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const uploadFile = (base64Data) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: "dialoga-machine-learning",
      Key: `rizwan.ishaq/riisbitech/${uuidv4()}.jpg`,
      Body: base64Data,
      ContentType: "image/jpeg",
      ACL: "public-read",
    };
    s3.upload(params, (s3Err, info) => {
      if (s3Err) {
        return reject(s3Err);
      }
      return resolve(info.Location);
    });
  });
};

module.exports = uploadFile;
