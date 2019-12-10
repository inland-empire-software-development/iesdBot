const TeamCreateModal = require('../views/TeamCreateModal')();

const displayTeamManager = (web, trigger_id) => {

  const modal = {
    trigger_id,
    view: TeamCreateModal
  }

  return web.views.open(modal);
}

module.exports = displayTeamManager;