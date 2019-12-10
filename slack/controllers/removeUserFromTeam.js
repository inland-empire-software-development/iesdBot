const winston = require('../../config/winston');

const removeUserFromTeam = async (payload, db) => {
  db.updateOne({ teamMembers: payload.user.id }, { $pull: { teamMembers: payload.user.id }}, (err) => {
    if(err){
      winston.error(`Failed to remove ${payload.user.username}(${payload.user.id}) from team ${payload.actions[0].value}`);
      return winston.error('Error:', err);
    }

    return winston.info(`Successfully removed ${payload.user.username}(${payload.user.id}) from team ${payload.actions[0].value}`);
  })
}

module.exports = removeUserFromTeam;