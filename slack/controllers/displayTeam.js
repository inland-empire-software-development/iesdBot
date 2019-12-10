const axios = require('axios');
const generateTeamBlock = require('./generateTeamBlock');

let Team = require('../views/Team');

const displayTeam = async (web, db, event) => {

  const teamBlock = await generateTeamBlock(db, event.user);
  
  const message = {
    channel: 'iesd-bot',
    user: event.user,
    blocks: teamBlock
  }

  return web.chat.postEphemeral(message);
}

module.exports = displayTeam;