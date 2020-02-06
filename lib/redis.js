const redis = require("redis");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(process.env.REDISPORT, process.env.REDISIP);
client.auth(process.env.REDISPASS);

client.setTimestamp = (identifier, userID, timestamp, channel) => {
  return client.hmsetAsync(`${identifier}:${userID}`, 'timestamp', timestamp, 'channel', channel, 'id', userID);
};

client.getTimestamp = (identifier, userID) => {
  return client.hgetallAsync(`${identifier}:${userID}`);
};

client.getAllTimestamp = async (identifier) => {
  const keys = await client.scanAsync(0, "MATCH", `${identifier}:*`);

  // client returns scan cursor as first value in array
  keys.shift();

  const multi = client.multi();

  keys[0].forEach((key) => {
    return multi.hgetallAsync(key);
  });

  const allTimestamps = await multi.execAsync();

  return allTimestamps;
}

module.exports = client;