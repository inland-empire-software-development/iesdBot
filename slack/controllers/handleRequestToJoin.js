const client = require('../../lib/redis');

// Views
const ModalMessage = require('../views/ModalMessage');

const handleRequestToJoin = async (web, payload) => {
  const modalMessage = `By clicking *Send Request* a message will be sent to
  the owner of the team asking them if you can join their team.`

  const modal = {
    trigger_id: payload.trigger_id,
    view: ModalMessage("Request To Join", modalMessage, "Send Request", "send_request_to_join", payload.actions[0].value)
  }

  const test = await web.views.open(modal);

  client.setTimestamp('', ) // LEFT OFF HERE CREATE REDIS ENTRY FOR VIEW ID

  console.log(test);
}

module.exports = handleRequestToJoin;
