// Database
const Team = require('../../models/Team');

// Controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const createTeam = require('./createTeam');

// Views
const ModalMessage = require('../views/ModalMessage');

const handleCreateTeam = async (web, payload, db) => {
  const values = payload.view.state.values;

  let teamName;
  let teamMembers;
  let teamSetting;

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

  if(checkTeamName){
    return {
      response_action: "update",
      view: ModalMessage("Error", "Team name is already taken", "Back", "return_to_team_modal", inputDataJSON)
    }
  } else if(checkTeamMembers.length > 0){
    return {
      response_action: "update",
      view: ModalMessage("Error", `The following users are already in a team: \n ${checkTeamMembers}`, "Back", "return_to_team_modal", inputDataJSON)
    }
  }

  await createTeam(teamName, teamMembers, teamSetting, payload);

  refreshTeamMessage(web, db, payload);

}

module.exports = handleCreateTeam;