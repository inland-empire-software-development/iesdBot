const removeUserFromTeam = require('./removeUserFromTeam');
const generateTeamBlock = require('./generateTeamBlock');
const axios = require('axios');

const handleLeaveTeam = async (payload, Team) => {
  await removeUserFromTeam(payload, Team);

  const teamBlock = await generateTeamBlock(Team, payload.user.id);

  axios.post(payload.response_url, {
    replace_original: 'true',
    blocks: teamBlock
  })
}

module.exports = handleLeaveTeam;
