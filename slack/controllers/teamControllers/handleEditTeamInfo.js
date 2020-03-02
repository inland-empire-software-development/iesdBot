// Database
const Team = require('../../../models/Team');

// Controllers
const refreshTeamMesssage = require('./refreshTeamMessage');
const updateTeamInfo = require('./updateTeamInfo');
const extractTeamFromPayloadState = require('./extractTeamFromPayloadState');
const isTeamInfoUnique = require('./isTeamInfoUnique');

// Views
const ModalMessage = require('../../views/teamViews/ModalMessage');

const handleEditTeamInfo = async (web, payload) => {
  const actionSource = "edit_team_info";

  const currentTeamInfo = await Team.findOne({ teamMembers: payload.user.id });
  
  const { teamName, teamMembers, teamSetting } = extractTeamFromPayloadState(payload);

  const newTeamMembers = teamMembers.filter(member => !currentTeamInfo.teamMembers.includes(member));

  const { isTeamNameUnique, isMembersUnique, membersInTeams } = await isTeamInfoUnique(teamName, newTeamMembers);

  const inputData = { teamName, teamMembers, teamSetting, actionSource };
  const inputDataJSON = JSON.stringify(inputData);

  if(currentTeamInfo.teamName !== teamName && !isTeamNameUnique){
    return {
      response_action: "update",
      view: ModalMessage("Error", `The team name *${teamName}* is already taken. Please choose a different name for your team.`, "Back", "return_to_team_modal", inputDataJSON)
    }
  } else if(!isMembersUnique){
    return {
      response_action: "update",
      view: ModalMessage("Error", `The following users are already in a team: \n ${membersInTeams}`, "Back", "return_to_team_modal", inputDataJSON)
    }
  } else if(!teamMembers.includes(payload.user.id)){
    console.log('test');
    return {
      response_action: "update",
      view: ModalMessage("Error", `You need to include yourself in the list of team members.`, "Back", "return_to_team_modal", inputDataJSON)
    }
  }

  updateTeamInfo(payload.user.id, teamName, teamMembers, teamSetting);

  refreshTeamMesssage(web, Team, payload);
}

module.exports = handleEditTeamInfo;