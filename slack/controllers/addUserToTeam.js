const winston = require('../../config/winston');

const Team = require('../../models/Team');

const addUserToTeam = async (userID, username, teamName) => {
  // Check to see if user is already in team, else go ahead and add them to team
  const userTeam = await Team.findOne({ teamName: teamName, teamMembers: userID }, (err, doc) => {
    if(err){
      winston.error(err);
    }
    else if(doc){
      winston.error(`Failed to add ${username}(${userID}) to team ${teamName} because user already in team`);
    }
  });

  if(!userTeam){
    Team.findOneAndUpdate(
      { teamName: teamName }, 
      { $push: { teamMembers: userID } }, 
      { new: true },
      (err, doc) => {
        if(err) return winston.error('Failed to add user to team', err);
        
        return winston.info(`Successfully added ${username}(${userID}) to team ${teamName}`)
      });
  }
}

module.exports = addUserToTeam;