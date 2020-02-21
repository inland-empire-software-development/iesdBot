const redis = require("redis");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({
  port: process.env.REDISPORT,
  host: process.env.REDISIP,
  password: process.env.REDISPASS,
  db: process.env.REDISDB,
});

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

client.setViewID = (identifier, userID, viewID) => {
  return client.setAsync(`${identifier}:${userID}`, viewID);
}

client.getViewID = (identifier, userID) => {
  return client.getAsync(`${identifier}:${userID}`);
}

module.exports = client;