const redis = require("redis");
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(process.env.REDISPORT, process.env.REDISIP);
client.auth(process.env.REDISPASS);

client.setTimestamp = (userID, timestamp, channel) => {
  return client.hmsetAsync(`TeamInfoTS:${userID}`, 'timestamp', timestamp, 'channel', channel, 'id', userID);
};

client.getTimestamp = (userID) => {
  return client.hgetallAsync(`TeamInfoTS:${userID}`);
};

client.getAllTimestamp = async () => {
  // const keys = await client.keysAsync('*');
  const keys = await client.scanAsync(0, "MATCH", "TeamInfoTS:*");

  // client returns scan cursor as first value in array
  keys.shift();

  const multi = client.multi();

  keys.forEach((key) => {
    return multi.hgetallAsync(key);
  });

  const allTimestamps = await multi.execAsync();

  return allTimestamps;
}

module.exports = client;