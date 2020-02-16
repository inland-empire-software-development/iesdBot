const PendingTeamRequest = require('../../models/PendingTeamRequest');

const Divider = require('../views/Divider');
const SectionText = require('../views/SectionText');

const removeAllPendingRequests = async (web, payload) => {
  const allTeamRequests = await PendingTeamRequest.find({ requestingUser: payload.user.id });

  await PendingTeamRequest.deleteMany({ requestingUser: payload.user.id });

  console.log('Successfully cancelled request'); // Add winston log

  try {
    allTeamRequests.forEach(teamRequest => {
      // Add winston log (`*<@${payload.user.id}>* has cancelled their request to join *${teamRequest.teamName}.*`)
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
    });
  } catch (err){
    console.log(err); // Add proper winston log
  }
}

module.exports = removeAllPendingRequests;