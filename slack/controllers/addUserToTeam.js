const winston = require('../../config/winston');

const addUserToTeam = async (payload, db) => {
  // Find team by team name and then pushes new user into it.
  winston.info('test');

  // Check to see if user is already in team, else go ahead and add them to team
  const userTeam = await db.findOne({ teamName: payload.actions[0].value, teamMembers: payload.user.id }, (err, doc) => {
    if(err){
      winston.error(err);
    }
    else if(doc){
      winston.error(`Failed to add ${payload.user.username}(${payload.user.id}) to team ${payload.actions[0].value} because user already in team`);
    }
  });

  if(!userTeam){
    db.findOneAndUpdate(
      { teamName: payload.actions[0].value }, 
      { $push: { teamMembers: payload.user.id } }, 
      { new: true },
      (err, doc) => {
        if(err) return winston.error('Failed to add user to team', err);
        
        return winston.info(`Successfully added ${payload.user.username}(${payload.user.id}) to team ${payload.actions[0].value}`)
      });
  }
}

module.exports = addUserToTeam;