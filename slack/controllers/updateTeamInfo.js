const Team = require('../../models/Team');

const updateTeamInfo = async (userID, teamName, teamMembers, teamSetting) => {
  const team = await Team.findOne({ teamMembers: userID });

  team.teamName = teamName;
  team.teamMembers = teamMembers;
  team.teamSetting = teamSetting;

  await team.save(async (err) => {
    if(err) return console.log(err);
    console.log('success'); // winston later
  });

  return team;
}

module.exports = updateTeamInfo;