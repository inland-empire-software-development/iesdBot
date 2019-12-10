const addUserToTeam = require('./addUserToTeam');
const generateTeamView = require('./generateTeamBlock');
const axios = require('axios');

const handleSelectTeam = async (web, payload, Team) => {
  await addUserToTeam(payload, Team);

  const teamBlock = await generateTeamView(Team);

  axios.post(payload.response_url, {
    replace_original: 'true',
    blocks: teamBlock
  })
}

module.exports = handleSelectTeam;
