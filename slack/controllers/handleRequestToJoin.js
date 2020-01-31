// Views
const ConfirmationModal = require('../views/ConfirmationModal');

const handleRequestToJoin = (web, payload) => {
  const modalMessage = `By clicking *Send Request* a message will be sent to
  the owner of the team asking them if you can join their team.`

  const modal = {
    trigger_id: payload.trigger_id,
    view: ConfirmationModal("Request To Join", modalMessage, "Send Request", "send_request_to_join")
  }

  web.views.open(modal);
}

module.exports = handleRequestToJoin;
