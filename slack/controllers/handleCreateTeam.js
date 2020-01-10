// controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const createTeam = require('./createTeam');

const handleCreateTeam = async (payload, db) => {
  await createTeam(payload, db);

  refreshTeamMessage(db, payload);
}

module.exports = handleCreateTeam;