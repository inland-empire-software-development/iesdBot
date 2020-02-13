// Views
const ModalMessage = require('../views/ModalMessage');

const displayCancelRequestToJoin = (web, payload, Team) => {
  const modalMessage = `By clicking *Confirm* your request to join *${payload.actions[0].value}* will be removed.`;

  const modal = {
    trigger_id: payload.trigger_id,
    view: ModalMessage("Cancel Request To Join", modalMessage, "Confirm", "cancel_request_to_join", payload.actions[0].value)
  }

  return web.views.open(modal);
}

module.exports = displayCancelRequestToJoin;