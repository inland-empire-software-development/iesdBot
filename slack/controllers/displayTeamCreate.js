const TeamCreateModal = require('../views/TeamCreateModal')();

const displayTeamCreate = (web, trigger_id) => {

  const modal = {
    trigger_id,
    view: TeamCreateModal
  }

  return web.views.open(modal);
}

module.exports = {
  displayTeamCreate
}