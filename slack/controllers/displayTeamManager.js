const TeamManagerModal = require('../views/TeamManagerModal')();

const displayTeamManager = (web, trigger_id) => {

  console.log(TeamManagerModal);

  const modal = {
    trigger_id,
    view: TeamManagerModal
  }

  return web.views.open(modal);
}

module.exports = displayTeamManager;