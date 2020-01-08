const axios = require('axios');

const client = require('../../lib/redis');

const updateTeamInfo = require('./updateTeamInfo');
const generateTeamBlock = require('./generateTeamBlock');

const handleEditTeamInfo = async (payload, db) => {
  updateTeamInfo(payload, db);

  const teamBlock = await generateTeamBlock(db, payload.user.id);

  const responseURL = await client.getResponseURL(payload.user.id);

  axios.post(responseURL, {
    replace_original: 'true',
    blocks: teamBlock
  });
}

module.exports = handleEditTeamInfo;