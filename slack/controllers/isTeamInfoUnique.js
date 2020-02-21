const Team = require('../../models/Team');

const isTeamInfoUnique = async (teamName, teamMembers) => {
  let isTeamNameUnique = true;
  let isMembersUnique = true;
  
  const checkTeamName = await Team.findOne({ teamName });
  const membersInTeams = [];

  for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    const memberTeam = await Team.findOne({ teamMembers: member });
    if(memberTeam){
      membersInTeams.push(`<@${member}>`);
    }
  }

  if(checkTeamName){isTeamNameUnique = false};
  if(membersInTeams.length > 0 ){isMembersUnique = false};

  return {
    isTeamNameUnique,
    isMembersUnique,
    membersInTeams
  }
}

module.exports = isTeamInfoUnique;