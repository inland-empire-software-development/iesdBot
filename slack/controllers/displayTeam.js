const client = require('../../lib/redis');

const generateTeamBlock = require('./generateTeamBlock');

const displayTeam = async (web, db, event) => {

  const teamBlock = await generateTeamBlock(db, event.user);
  
  const message = {
    channel: event.user,
    blocks: teamBlock,
    as_user: true
  }

  const oldMessageTS = await client.getTimestamp('TeamInfoTS', event.user);

  if(oldMessageTS){
    const oldMessage = {
      channel: oldMessageTS.channel,
      ts: oldMessageTS.timestamp
    }

    web.chat.delete(oldMessage);
  }

  const postMessage = await web.chat.postMessage(message);

  await client.setTimestamp('TeamInfoTS', event.user, postMessage.ts, postMessage.channel);

  return postMessage;
}

module.exports = displayTeam;