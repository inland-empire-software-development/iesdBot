// controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const addUserToTeam = require('./addUserToTeam');

const handleSelectTeam = async (web, payload, db) => {
  await addUserToTeam(payload, db);

  refreshTeamMessage(db, payload);
}

module.exports = handleSelectTeam;
