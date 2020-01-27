const axios = require('axios');

// lib
const client = require('../../lib/redis');

// controllers
const generateTeamBlock = require('./generateTeamBlock');

const refreshTeamMessage = async (web, db, payload) => {
  const teamBlock = await generateTeamBlock(db, payload.user.id);

  const multiMessageInfo = await client.getAllTimestamp();

  multiMessageInfo.forEach((messageInfo) => {
    const message = {
      channel: messageInfo.channel,
      blocks: teamBlock,
      as_user: true,
      ts: messageInfo.timestamp
    }

    return web.chat.update(message);
  });
}

module.exports = refreshTeamMessage;