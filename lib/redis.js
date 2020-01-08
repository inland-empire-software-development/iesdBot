const redis = require("redis");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(process.env.REDISPORT, process.env.REDISIP);
client.auth(process.env.REDISPASS);

client.setResponseURL = (userID, responseURL) => {
  return client.setAsync(userID, responseURL);
};

client.getResponseURL = (userID) => {
  return client.getAsync(userID).then((responseURL) => responseURL);
};

module.exports = client;