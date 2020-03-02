// Database
const Team = require('../../models/Team');
const PendingTeamRequest = require('../../models/PendingTeamRequest');

// Controllers
const refreshTeamMessage = require('../controllers/refreshTeamMessage');

// Views
const RequestToJoinActions = require('../views/RequestToJoinActions');
const Divider = require('../views/Divider');
const SectionText = require('../views/SectionText');

const handleSendRequestToJoin = async (web, payload) => {
  const userTeam = await Team.findOne({ teamName: payload.view.private_metadata });

  const { teamName, teamOwner } = userTeam;
  const requestingUserID = payload.user.id;
  const requestingUsername = payload.user.username;

  const message = {
    channel: teamOwner,
    blocks: [
      Divider(),
      SectionText(`*<@${requestingUserID}>* has requested to join *${teamName}.*`),
      RequestToJoinActions(teamName, requestingUserID, requestingUsername),
      Divider()
    ],
    as_user: true
  }

  const requestMessage = await web.chat.postMessage(message);

  PendingTeamRequest.create({
    teamName: teamName,
    requestingUser: requestingUserID,
    requestTimestamp: requestMessage.ts,
    messageChannel: requestMessage.channel
  });

  refreshTeamMessage(web, Team, payload);

}

module.exports = handleSendRequestToJoin;