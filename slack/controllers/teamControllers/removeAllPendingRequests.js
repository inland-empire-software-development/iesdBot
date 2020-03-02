const PendingTeamRequest = require('../../../models/PendingTeamRequest');
const Team = require('../../../models/Team');

const Divider = require('../../views/teamViews/Divider');
const SectionText = require('../../views/teamViews/SectionText');

const removeAllPendingRequests = async (web, userID) => {
  const allTeamRequests = await PendingTeamRequest.find({ requestingUser: userID });

  const userTeam = await Team.findOne({ teamMembers: userID });

  await PendingTeamRequest.deleteMany({ requestingUser: userID });

  console.log('Successfully cancelled request'); // Add winston log

  try {
    allTeamRequests.forEach(teamRequest => {
      if(userTeam.teamName === teamRequest.teamName){
        web.chat.update({
          channel: teamRequest.messageChannel,
          ts: teamRequest.requestTimestamp,
          as_user: true,
          blocks: [
            Divider(),
            SectionText(`*<@${userID}>* has joined *${teamRequest.teamName}.*`),
            Divider()
          ]
        });
      } else {
        web.chat.update({
          channel: teamRequest.messageChannel,
          ts: teamRequest.requestTimestamp,
          as_user: true,
          blocks: [
            Divider(),
            SectionText(`*<@${userID}>* has cancelled their request to join *${teamRequest.teamName}.*`),
            Divider()
          ]
        });
        // Add winston log (`*<@${userID}>* has cancelled their request to join *${teamRequest.teamName}.*`)
      }
    });
  } catch (err){
    console.log(err); // Add proper winston log
  }
}

module.exports = removeAllPendingRequests;