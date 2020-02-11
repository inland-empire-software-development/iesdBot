const client = require('../../lib/redis');

const RequestToJoinActions = require('../views/RequestToJoinActions');
const Divider = require('../views/Divider');
const SectionText = require('../views/SectionText');

const handleSendRequestToJoin = async (web, payload, Team) => {
  const userTeam = await Team.findOne({ teamName: payload.view.private_metadata });

  // UERTLGB9C

  // UPDATE MODAL saying request has been sent
  // Add user to list of pending invites for team
  // Add an option in team manager to manage pending invites
  // Will change modal to display pending invites

  const message = {
    channel: 'UERTLGB9C', // CHANGE THIS LATER ONCE IT'S READY
    blocks: [
      Divider(),
      SectionText(`*<@${payload.user.id}>* has requested to join *${userTeam.teamName}.*`),
      RequestToJoinActions(),
      Divider()
    ],
    as_user: true
  }

  web.chat.postMessage(message);
}

module.exports = handleSendRequestToJoin;