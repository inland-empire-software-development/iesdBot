// Database
const Team = require('../../../models/Team');

// Views
const TeamManagerModalReadOnly = require('../../views/teamViews/TeamManagerModalReadOnly');

const handleDisplayTeamManagerReadOnly = async (web, payload) => {

  const userTeam = await Team.findOne({ teamMembers: payload.user.id });

  const teamMembers = userTeam.teamMembers.map(member => `<@${member}>`)

  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamManagerModalReadOnly(userTeam.teamName, userTeam.teamOwner, teamMembers, userTeam.teamSetting)
  }
  
  return web.views.open(modal);
}

module.exports = handleDisplayTeamManagerReadOnly;