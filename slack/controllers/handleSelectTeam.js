// controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const addUserToTeam = require('./addUserToTeam');
const removeAllPendingRequests = require('./removeAllPendingRequests');

const handleSelectTeam = async (web, payload, db) => {
  await addUserToTeam(payload, db);

  refreshTeamMessage(web, db, payload);

  removeAllPendingRequests(web, payload);
}

module.exports = handleSelectTeam;
