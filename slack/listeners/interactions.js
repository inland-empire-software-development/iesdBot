const displayTeamCreate = require('../controllers/displayTeamCreate');
const handleCreateTeam = require('../controllers/handleCreateTeam');
const handleSelectTeam = require('../controllers/handleSelectTeam');
const handleRequestToJoin = require('../controllers/handleRequestToJoin');
const handleLeaveTeam = require('../controllers/handleLeaveTeam');
const displayTeamManager = require('../controllers/displayTeamManager');
const displayTeamManagerReadOnly = require('../controllers/displayTeamManagerReadOnly')
const handleEditTeamInfo = require('../controllers/handleEditTeamInfo');
const handleDeleteTeam = require('../controllers/handleDeleteTeam');

const Team = require('../../models/Team');

//temp
const Divider = require('../views/Divider');

module.exports = (slackInteractions, web) => {

  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload) => handleSelectTeam(web, payload, Team));

  // Handles displaying a modal informing the user about requesting to join a team
  slackInteractions.action({ actionId: 'request_to_join' }, (payload) => handleRequestToJoin(web, payload));

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

  // Handles the user's submission of the "team create" modal
  slackInteractions.viewSubmission({ callbackId: 'submit_team' }, (payload) => handleCreateTeam(web, payload, Team));

  // Handles the user's submission of the "edit team info" modal
  slackInteractions.viewSubmission({ callbackId: 'edit_team_info' }, (payload) => handleEditTeamInfo(web, payload, Team));

  // slackInteractions.viewSubmission({ callbackId: 'send_request_to_join' }, async (payload) => {
  //   const userTeam = await Team.findOne({ teamName: payload.view.private_metadata });

  //   // console.log(userTeam.teamOwner);
  //   console.log(payload);
  //   // UERTLGB9C

  //   // UPDATE MODAL saying request has been sent
  //   // Add user to list of pending invites for team
  //   // Add an option in team manager to manage pending invites
  //   // Will change modal to display pending invites

  //   const message = {
  //     channel: 'UERTLGB9C',
  //     blocks: [
  //       Divider(),
  //       {
  //         type: "section",
  //         text: {
  //           type: "mrkdwn",
  //           text: `<@${payload.user.id}> has requested to join your team.`
  //         }
  //       },
  //       {
  //         "type": "actions",
  //         "elements": [
  //           {
  //             "type": "button",
  //             "text": {
  //               "type": "plain_text",
  //               "text": "Accept",
  //               "emoji": true
  //             },
  //             "value": "accept_request_to_join"
  //           },
  //           {
  //             "type": "button",
  //             "text": {
  //               "type": "plain_text",
  //               "text": "Decline",
  //               "emoji": true
  //             },
  //             "value": "decline_request_to_join"
  //           },
  //         ]
  //       },
  //       Divider()
  //     ],
  //     as_user: true
  //   }

  //   web.chat.postMessage(message);
  // });

}