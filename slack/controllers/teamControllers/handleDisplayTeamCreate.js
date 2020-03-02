const TeamCreateModal = require('../../views/teamViews/TeamCreateModal');

const handleDisplayTeamCreate = (web, payload) => {
  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamCreateModal("", [payload.user.id], "Open")
  }

  return web.views.open(modal);
}

module.exports = handleDisplayTeamCreate;