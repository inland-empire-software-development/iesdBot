const addUserToTeam = require('./addUserToTeam');
const generateTeamView = require('./generateTeamBlock');

const handleSelectTeam = async (web, payload, Team) => {
  addUserToTeam(payload, Team);
  const teamBlock = await generateTeamView(Team);
  web.chat.update({
    channel: payload.channel.id,
    ts: payload.message.ts,
    blocks: teamBlock
  });
}

module.exports = handleSelectTeam;