const handleDisplayTeamCreate = require('../controllers/handleDisplayTeamCreate');
const handleCreateTeam = require('../controllers/handleCreateTeam');
const handleSelectTeam = require('../controllers/handleSelectTeam');
const handleRequestToJoin = require('../controllers/handleRequestToJoin');
const handleCancelRequestToJoin = require('../controllers/handleCancelRequestToJoin');
const handleAcceptRequestToJoin = require('../controllers/handleAcceptRequestToTeam');
const handleSendRequestToJoin = require('../controllers/handleSendRequestToJoin');
const handleDeclineRequestToJoin = require('../controllers/handleDeclineRequestToJoin');
const handleLeaveTeam = require('../controllers/handleLeaveTeam');
const handleDisplayTeamManager = require('../controllers/handleDisplayTeamManager');
const handleDisplayTeamManagerReadOnly = require('../controllers/handleDisplayTeamManagerReadOnly');
const handleDisplayCancelRequestToJoin = require('../controllers/handleDisplayCancelRequestToJoin');
const handleEditTeamInfo = require('../controllers/handleEditTeamInfo');
const handleDeleteTeam = require('../controllers/handleDeleteTeam');
const handleReturnToTeamModal = require('../controllers/handleReturnToTeamModal');

module.exports = (slackInteractions, web) => {
  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload) => handleSelectTeam(web, payload));

  // Handles displaying a modal informing the user about requesting to join a team
  slackInteractions.action({ actionId: 'request_to_join' }, (payload) => handleRequestToJoin(web, payload));

  // Handles displaying a modal informing the user about cancellation of request to join the selected team
  slackInteractions.action({ actionId: 'display_cancel_request' }, (payload) => handleDisplayCancelRequestToJoin(web, payload));

  // Handles removing the current user when they click "leave" from the team
  slackInteractions.action({ actionId: 'leave_team' }, (payload) => handleLeaveTeam(web, payload));

  // Handles deleting the current user's team when they click "disband" the team
  slackInteractions.action({ actionId: 'delete_team' } , (payload) => handleDeleteTeam(web, payload));

  // Handles opening the modal for managing the user's team
  slackInteractions.action({ actionId: 'manage_team' }, (payload) => handleDisplayTeamManager(web, payload));

  // Handles opening the modal for viewing the team's information
  slackInteractions.action({ actionId: 'view_team' }, (payload) => handleDisplayTeamManagerReadOnly(web, payload));

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload) => handleDisplayTeamCreate(web, payload));

  // Handle declining request to join team
  slackInteractions.action({ actionId: 'decline_request_to_join' }, (payload) => handleDeclineRequestToJoin(web, payload));

  // Handles accepting request to join team
  slackInteractions.action({ actionId: 'accept_request_to_join' }, (payload) => handleAcceptRequestToJoin(web, payload))

  // Handles the user's submission of the "team create" modal
  slackInteractions.viewSubmission({ callbackId: 'submit_team' }, (payload) => handleCreateTeam(web, payload));

  // Handles the user's submission of the "edit team info" modal
  slackInteractions.viewSubmission({ callbackId: 'edit_team_info' }, (payload) => handleEditTeamInfo(web, payload));

  // Handles sending a message to the team owner requesting permission for the user to join
  slackInteractions.viewSubmission({ callbackId: 'send_request_to_join' }, (payload) => handleSendRequestToJoin(web, payload));

  // Handles cancellation of request to join selected team
  slackInteractions.viewSubmission({ callbackId: 'cancel_request_to_join' }, (payload) => handleCancelRequestToJoin(web, payload));

  // Handles taking the user back to the previous modal
  slackInteractions.viewSubmission({ callbackId: 'return_to_team_modal' }, (payload) => handleReturnToTeamModal(payload));

}