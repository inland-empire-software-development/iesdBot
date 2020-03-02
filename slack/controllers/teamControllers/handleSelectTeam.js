// Database
const Team = require('../../../models/Team');

// controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const addUserToTeam = require('./addUserToTeam');
const removeAllPendingRequests = require('./removeAllPendingRequests');

const handleSelectTeam = async (web, payload) => {
  const userID = payload.user.id;
  const username = payload.user.username;
  const teamName = payload.actions[0].value;

  await addUserToTeam(userID, username, teamName);

  refreshTeamMessage(web, Team, payload);

  removeAllPendingRequests(web, userID);
}

module.exports = handleSelectTeam;
