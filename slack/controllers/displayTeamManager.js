const client = require('../../lib/redis');

const TeamManagerModal = require('../views/TeamManagerModal')();

const displayTeamManager = (web, payload) => {

  client.setResponseURL(payload.user.id, payload.response_url);

  const modal = {
    trigger_id: payload.trigger_id,
    view: TeamManagerModal
  }

  return web.views.open(modal);
}

module.exports = displayTeamManager;