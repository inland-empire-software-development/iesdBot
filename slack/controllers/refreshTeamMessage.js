const axios = require('axios');

// lib
const client = require('../../lib/redis');

// controllers
const generateTeamBlock = require('./generateTeamBlock');

const refreshTeamMessage = async (db, payload) => {
  const teamBlock = await generateTeamBlock(db, payload.user.id);

  const responseURL = await client.getResponseURL(payload.user.id);

  axios.post(responseURL, {
    replace_original: 'true',
    blocks: teamBlock
  });
}

module.exports = refreshTeamMessage;