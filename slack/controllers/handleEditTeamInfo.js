// controllers
const refreshTeamMesssage = require('./refreshTeamMessage');
const updateTeamInfo = require('./updateTeamInfo');

const handleEditTeamInfo = async (payload, db) => {
  updateTeamInfo(payload, db);

  refreshTeamMesssage(db, payload);
}

module.exports = handleEditTeamInfo;