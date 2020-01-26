const client = require('../../lib/redis');

const TeamManagerModal = require('../views/TeamManagerModal');

const displayTeamManager = async (web, payload, db) => {

  client.setResponseURL(payload.user.id, payload.response_url);

  const userTeam = await db.findOne({ teamMembers: payload.user.id });

  /**
   * Remove current user from list of users, so that it doesn't display
   * the user in the multi_user_select
   */
  const teamMembers = userTeam.teamMembers.filter(member => member !== payload.user.id);

  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamManagerModal(userTeam.teamName, teamMembers, userTeam.teamSetting)
  }
  
  return web.views.open(modal);
}

module.exports = displayTeamManager;