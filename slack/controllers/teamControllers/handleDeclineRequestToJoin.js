const PendingTeamRequest = require('../../../models/PendingTeamRequest');
const Team = require('../../../models/Team');

const Divider = require('../../views/teamViews/Divider');
const SectionText = require('../../views/teamViews/SectionText');

const refreshTeamMessage = require('./refreshTeamMessage');

const handleDeclineRequestToJoin = async (web, payload) => {
  const data = JSON.parse(payload.actions[0].value);

  const teamRequest = await PendingTeamRequest.findOneAndDelete({ requestingUser: data.userID, teamName: data.teamName});

  refreshTeamMessage(web, Team, payload);

  try {
    web.chat.update({
      channel: teamRequest.messageChannel,
      ts: teamRequest.requestTimestamp,
      as_user: true,
      blocks: [
        Divider(),
        SectionText(`You have declined *<@${data.userID}>*'s request to join *${data.teamName}.*`),
        Divider()
      ]
    });
    // Add winston log (`You have declined *<@${payload.user.id}>*'s request to join *${teamRequest.teamName}.*`)
  } catch (err){
    console.log(err); // Add proper winston log
  }
}

module.exports = handleDeclineRequestToJoin;