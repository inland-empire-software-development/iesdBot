const client = require('../../lib/redis');

const generateTeamBlock = require('./generateTeamBlock');

const displayTeam = async (web, db, event) => {

  const teamBlock = await generateTeamBlock(db, event.user);
  
  const message = {
    channel: event.user,
    blocks: teamBlock,
    as_user: true
  }

  const postMessage = await web.chat.postMessage(message);

  await client.setTimestamp(event.user, postMessage.ts, postMessage.channel);

  return postMessage;
}

module.exports = displayTeam;