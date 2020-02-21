const isTeamInfoUnique = (payload) => {
  let isTeamNameUnique, isMembersUnique;

  const values = payload.view.state.values;

  let teamName, teamMembers, teamSetting;

  for(let value in values){
    if(values[value].hasOwnProperty('team_name')){
      teamName = values[value].team_name.value;
    } else if(values[value].hasOwnProperty('members')){
      teamMembers = values[value].members.selected_users;
      teamMembers.unshift(payload.user.id); 
    } else {
      teamSetting = values[value].group_settings.selected_option.value;
    }
  }

  const inputData = { teamName, teamMembers, teamSetting };
  const inputDataJSON = JSON.stringify(inputData);
  
  const checkTeamName = await Team.findOne({ teamName });
  const checkTeamMembers = [];

  for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    const memberTeam = await Team.findOne({ teamMembers: member });
    if(memberTeam){
      checkTeamMembers.push(`<@${member}>`);
    }
  }

  if(checkTeamName){isTeamNameUnique = false};
  if(checkTeamMembers.length > 0 ){isMembersUnique = false};

  return {
    isTeamNameUnique,
    isMembersUnique,
    teamName,
    teamMembers,
    teamSetting,
    inputDataJSON
  }
}

module.exports = isTeamInfoUnique;