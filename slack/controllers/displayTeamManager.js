const client = require('../../lib/redis');

const TeamManagerModal = require('../views/TeamManagerModal');

const displayTeamManager = async (web, payload, db) => {

  const userTeam = await db.findOne({ teamMembers: payload.user.id });

  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamManagerModal(userTeam.teamName, userTeam.teamMembers, userTeam.teamSetting)
  }
  
  return web.views.open(modal);
}

module.exports = displayTeamManager;