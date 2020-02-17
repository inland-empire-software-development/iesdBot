const PendingTeamRequest = require('../../models/PendingTeamRequest');
const Team = require('../../models/Team');

const Divider = require('../views/Divider');
const SectionText = require('../views/SectionText');

const refreshTeamMessage = require('./refreshTeamMessage');

const handleDeclineRequestToJoin = async (web, payload) => {
  const teamRequest = await PendingTeamRequest.findOneAndDelete({ requestingUser: payload.user.id, teamName: payload.actions[0].value });

  refreshTeamMessage(web, Team, payload);

  try {
    web.chat.update({
      channel: teamRequest.messageChannel,
      ts: teamRequest.requestTimestamp,
      as_user: true,
      blocks: [
        Divider(),
        SectionText(`You have declined *<@${payload.user.id}>*'s request to join *${teamRequest.teamName}.*`),
        Divider()
      ]
    });
    // Add winston log (`You have declined *<@${payload.user.id}>*'s request to join *${teamRequest.teamName}.*`)
  } catch (err){
    console.log(err); // Add proper winston log
  }
}

module.exports = handleDeclineRequestToJoin;