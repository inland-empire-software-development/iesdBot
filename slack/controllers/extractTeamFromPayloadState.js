const extractTeamFromPayloadState = (payload) => {
  const values = payload.view.state.values;

  let teamName, teamMembers, teamSetting;

  for(let value in values){
    if(values[value].hasOwnProperty('team_name')){
      teamName = values[value].team_name.value;
    } else if(values[value].hasOwnProperty('members')){
      teamMembers = values[value].members.selected_users;
    } else {
      teamSetting = values[value].group_settings.selected_option.value;
    }
  }

  // Removes owner from list of members incase user added themselves to the list. 
  // Prevents duplicate owners.
  teamMembers = teamMembers.filter(member => member !== payload.user.id);

  // After filter add owner back into list
  teamMembers.unshift(payload.user.id); 


  return {
    teamName,
    teamMembers,
    teamSetting
  }
}

module.exports = extractTeamFromPayloadState;