// Database
const Team = require('../../models/Team');

// Controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const createTeam = require('./createTeam');
const extractTeamFromPayloadState = require('./extractTeamFromPayloadState');
const isTeamInfoUnique = require('./isTeamInfoUnique');

// Views
const ModalMessage = require('../views/ModalMessage');

const handleCreateTeam = async (web, payload) => {
  const actionSource = "submit_team";

  const { teamName, teamMembers, teamSetting } = extractTeamFromPayloadState(payload);
  const { isTeamNameUnique, isMembersUnique, membersInTeams } = await isTeamInfoUnique(teamName, teamMembers);

  const inputData = { teamName, teamMembers, teamSetting, actionSource };
  const inputDataJSON = JSON.stringify(inputData);

  if(!isTeamNameUnique){
    return {
      response_action: "update",
      view: ModalMessage("Error", `The team name *${teamName}* is already taken. Please choose a different name for your team.`, "Back", "return_to_team_modal", inputDataJSON)
    }
  } else if(!isMembersUnique){
    return {
      response_action: "update",
      view: ModalMessage("Error", `The following users are already in a team: \n ${membersInTeams}`, "Back", "return_to_team_modal", inputDataJSON)
    }
  }

  await createTeam(teamName, teamMembers, teamSetting, payload);

  refreshTeamMessage(web, Team, payload);

}

module.exports = handleCreateTeam;