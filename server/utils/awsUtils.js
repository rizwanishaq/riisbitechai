import AWS from "aws-sdk";
import * as dotenv from "dotenv";
dotenv.config();
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const listUrls = async (prefix = process.env.prefix) => {
  const params = {
    Bucket: process.env.bucket,
    Prefix: prefix,
  };
  //   const baseUrl = process.env.URL;
  const data = await s3.listObjects(params).promise();
  const _sourceVideos = await data.Contents;
  const urls = _sourceVideos
    .filter((item) => item.Key && item.Key.includes(".mp4"))
    .map((item) => `${process.env.URL}/${item.Key}`);

  return urls;
};

export default listUrls;
