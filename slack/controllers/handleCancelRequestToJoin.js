const refreshTeamMessage = require('./refreshTeamMessage');

const handleCancelRequestToJoin = async (web, payload, Team, PendingTeamRequest) => {
  await PendingTeamRequest.deleteOne({ requestingUser: payload.user.id, teamName: payload.view.private_metadata }, (err) => {
    if(err) return console.log(err);
    console.log('successfully cancelled request');
  });

  refreshTeamMessage(web, Team, payload);

  // UPDATE REQUESTS IN DM
}

module.exports = handleCancelRequestToJoin;