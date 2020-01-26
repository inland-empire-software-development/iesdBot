const winston = require('../../config/winston');

const removeTeam = require('./removeTeam');

const removeUserFromTeam = async (payload, db) => {
  const team = await db.findOne({ teamMembers: payload.user.id });

  if(team.teamMembers.length <= 1){
    removeTeam(payload, db);
  } else if(team.teamOwner === payload.user.id){
    db.updateOne({ teamMembers: payload.user.id }, { $pull: { teamMembers: payload.user.id }, teamOwner: team.teamMembers[1]}, (err) => {
      if(err){
        winston.error(`Failed to remove ${payload.user.username}(${payload.user.id}) from team ${payload.actions[0].value}`);
        return winston.error('Error:', err);
      }
  
      winston.info(`Successfully removed ${payload.user.username}(${payload.user.id}) from team ${payload.actions[0].value}`);
      return winston.info(`The new owner of team ${team.teamName} is ${team.teamMembers[1]}.`);
    })
  } else {
    db.updateOne({ teamMembers: payload.user.id }, { $pull: { teamMembers: payload.user.id }}, (err) => {
      if(err){
        winston.error(`Failed to remove ${payload.user.username}(${payload.user.id}) from team ${payload.actions[0].value}`);
        return winston.error('Error:', err);
      }
  
      return winston.info(`Successfully removed ${payload.user.username}(${payload.user.id}) from team ${payload.actions[0].value}`);
    })
  }
}

module.exports = removeUserFromTeam;