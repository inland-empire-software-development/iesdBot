const updateTeamInfo = async (payload, db) => {

  const values = payload.view.state.values;

  const team = await db.findOne({ teamMembers: payload.user.id });

  for(let value in values){
    if(values[value].hasOwnProperty('team_name')){
      team.teamName = values[value].team_name.value;
    } else if(values[value].hasOwnProperty('members')){
      team.teamMembers = values[value].members.selected_users;
      teamMembers.unshift(payload.user.id);
    } else {
      team.teamSetting = values[value].group_settings.selected_option.value;
    }
  }

  await team.save(async (err) => {
    if(err) return console.log(err);
    console.log('success');
  });

  return team;
}

module.exports = updateTeamInfo;