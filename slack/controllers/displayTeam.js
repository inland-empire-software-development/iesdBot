const generateTeamBlock = require('./generateTeamBlock');

const displayTeam = async (web, db, event) => {

  const teamBlock = await generateTeamBlock(db, event.user);
  
  // const message = {
  //   channel: 'iesd-bot',
  //   user: event.user,
  //   blocks: teamBlock
  // }

  // return web.chat.postEphemeral(message);

  const message = {
    channel: event.user,
    blocks: teamBlock,
    as_user: true
  }

  return web.chat.postMessage(message);
}

module.exports = displayTeam;