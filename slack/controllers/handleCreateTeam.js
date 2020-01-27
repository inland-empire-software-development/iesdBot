// controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const createTeam = require('./createTeam');

const handleCreateTeam = async (web, payload, db) => {
  await createTeam(payload, db);

  refreshTeamMessage(web, db, payload);
}

module.exports = handleCreateTeam;