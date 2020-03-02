// Database
const Team = require('../../../models/Team');

// controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const addUserToTeam = require('./addUserToTeam');
const removeAllPendingRequests = require('./removeAllPendingRequests');

const handleAcceptRequestToTeam = async (web, payload) => {
  const data = JSON.parse(payload.actions[0].value);

  await addUserToTeam(data.userID, data.username, data.teamName);

  refreshTeamMessage(web, Team, payload);

  removeAllPendingRequests(web, data.userID);

}

module.exports = handleAcceptRequestToTeam;