// Database
const Team = require('../../models/Team');
const PendingTeamRequest = require('../../models/PendingTeamRequest');

// Controllers
const refreshTeamMessage = require('./refreshTeamMessage');

// Views
const Divider = require('../views/Divider');
const SectionText = require('../views/SectionText');

const handleCancelRequestToJoin = async (web, payload) => {
  const teamRequest = await PendingTeamRequest.findOneAndDelete({ requestingUser: payload.user.id, teamName: payload.view.private_metadata });

  console.log('Successfully cancelled request'); // Add winston log

  refreshTeamMessage(web, Team, payload);

  try {
    web.chat.update({
      channel: teamRequest.messageChannel,
      ts: teamRequest.requestTimestamp,
      as_user: true,
      blocks: [
        Divider(),
        SectionText(`*<@${payload.user.id}>* has cancelled their request to join *${teamRequest.teamName}.*`),
        Divider()
      ]
    });

    // Add winston log (`*<@${payload.user.id}>* has cancelled their request to join *${teamRequest.teamName}.*`)
  } catch (err){
    console.log(err); // Add proper winston log
  }
}

module.exports = handleCancelRequestToJoin;
