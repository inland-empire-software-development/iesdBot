const client = require('../../lib/redis');

const TeamManagerModal = require('../views/TeamManagerModal');

const displayTeamManager = async (web, payload, db) => {

  client.setResponseURL(payload.user.id, payload.response_url);

  const userTeam = await db.find({ teamMembers: payload.user.id });
  const teamMembers = userTeam[0].teamMembers.filter((user) => {
    return user !== payload.user.id;
  });

  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamManagerModal(userTeam[0].teamName, teamMembers, userTeam[0].teamSetting)
  }
  
  return web.views.open(modal);
}

module.exports = displayTeamManager;