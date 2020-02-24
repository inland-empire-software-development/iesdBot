// Database
const Team = require('../../models/Team');

const TeamManagerModal = require('../views/TeamManagerModal');

const handleDisplayTeamManager = async (web, payload) => {

  const userTeam = await Team.findOne({ teamMembers: payload.user.id });

  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamManagerModal(userTeam.teamName, userTeam.teamMembers, userTeam.teamSetting)
  }
  
  return web.views.open(modal);
}

module.exports = handleDisplayTeamManager;