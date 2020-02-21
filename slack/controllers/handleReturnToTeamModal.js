// Views
const TeamCreateModal = require('../views/TeamCreateModal');
const TeamManagerModal = require('../views/TeamManagerModal');

const handleReturnToTeamModal = (payload) => {
  const inputData = JSON.parse(payload.view.private_metadata);
  const { teamName, teamMembers, teamSetting, actionSource } = inputData;

  // Remove owner from list of members
  teamMembers.shift();

  switch(actionSource){
    case 'submit_team':
      return {
        response_action: "update",
        view: TeamCreateModal(teamName, teamMembers, teamSetting)
      }
    case 'edit_team_info':
      return {
        response_action: "update",
        view: TeamManagerModal(teamName, teamMembers, teamSetting)
      }
  }
}

module.exports = handleReturnToTeamModal;