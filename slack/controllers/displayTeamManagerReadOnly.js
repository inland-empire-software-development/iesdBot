const client = require('../../lib/redis');

const TeamManagerModal = require('../views/TeamManagerModal');

const TeamManagerModalReadOnly = require('../views/TeamManagerModalReadOnly');

const displayTeamManagerReadOnly = async (web, payload, db) => {

  const userTeam = await db.findOne({ teamMembers: payload.user.id });

  const teamMembers = userTeam.teamMembers.map(member => `<@${member}>`)

  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamManagerModalReadOnly(userTeam.teamName, userTeam.teamOwner, teamMembers, userTeam.teamSetting)
  }
  
  return web.views.open(modal);
}

module.exports = displayTeamManagerReadOnly;