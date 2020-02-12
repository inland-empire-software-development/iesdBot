const displayTeamCreate = require('../controllers/displayTeamCreate');
const handleCreateTeam = require('../controllers/handleCreateTeam');
const handleSelectTeam = require('../controllers/handleSelectTeam');
const handleRequestToJoin = require('../controllers/handleRequestToJoin');
const handleSendRequestToJoin = require('../controllers/handleSendRequestToJoin');
const handleLeaveTeam = require('../controllers/handleLeaveTeam');
const displayTeamManager = require('../controllers/displayTeamManager');
const displayTeamManagerReadOnly = require('../controllers/displayTeamManagerReadOnly')
const handleEditTeamInfo = require('../controllers/handleEditTeamInfo');
const handleDeleteTeam = require('../controllers/handleDeleteTeam');

const Team = require('../../models/Team');
const PendingTeamRequest = require('../../models/PendingTeamRequest');

module.exports = (slackInteractions, web) => {

  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload) => handleSelectTeam(web, payload, Team));

  // Handles displaying a modal informing the user about requesting to join a team
  slackInteractions.action({ actionId: 'request_to_join' }, (payload) => handleRequestToJoin(web, payload, Team));

  // Handles removing the current user when they click "leave" from the team
  slackInteractions.action({ actionId: 'leave_team' }, (payload) => handleLeaveTeam(web, payload, Team));

  // Handles deleting the current user's team when they click "disband" the team
  slackInteractions.action({ actionId: 'delete_team' } , (payload) => handleDeleteTeam(web, payload, Team));

  // Handles opening the modal for managing the user's team
  slackInteractions.action({ actionId: 'manage_team' }, (payload) => displayTeamManager(web, payload, Team));

  // Handles opening the modal for viewing the team's information
  slackInteractions.action({ actionId: 'view_team' }, (payload) => displayTeamManagerReadOnly(web, payload, Team));

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload) => displayTeamCreate(web, payload.trigger_id));

  slackInteractions.action({ actionId: 'accept_request_to_join' }, (payload) => {
    const db = PendingTeamRequest;

    const actionData = JSON.parse(payload.actions[0].value);

    const teamName = actionData.teamName;
    const requestingUser = actionData.requestingUser;
  });

  // Handles the user's submission of the "team create" modal
  slackInteractions.viewSubmission({ callbackId: 'submit_team' }, (payload) => handleCreateTeam(web, payload, Team));

  // Handles the user's submission of the "edit team info" modal
  slackInteractions.viewSubmission({ callbackId: 'edit_team_info' }, (payload) => handleEditTeamInfo(web, payload, Team));

  // Handles sending a message to the team owner requesting permission for the user to join
  slackInteractions.viewSubmission({ callbackId: 'send_request_to_join' }, (payload) => handleSendRequestToJoin(web, payload, Team, PendingTeamRequest));

}