// Database
const Team = require('../../../models/Team');

// Views
const ModalMessage = require('../../views/teamViews/ModalMessage');

const handleRequestToJoin = async (web, payload) => {
  const userTeam = await Team.findOne({ teamName: payload.actions[0].value });

  const modalMessage = `By clicking *Send Request* a message will be sent to
  *<@${userTeam.teamOwner}>* asking them if you can join *${userTeam.teamName}*.`

  const modal = {
    trigger_id: payload.trigger_id,
    view: ModalMessage("Request To Join", modalMessage, "Send Request", "send_request_to_join", payload.actions[0].value)
  }

  return web.views.open(modal);
}

module.exports = handleRequestToJoin;
