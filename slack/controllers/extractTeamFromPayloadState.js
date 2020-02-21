const extractTeamFromPayloadState = (payload) => {
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

  return {
    teamName,
    teamMembers,
    teamSetting
  }
}

module.exports = extractTeamFromPayloadState;