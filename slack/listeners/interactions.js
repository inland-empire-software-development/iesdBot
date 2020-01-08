const displayTeamCreate = require('../controllers/displayTeamCreate');
const createTeam = require('../controllers/createTeam');
const handleSelectTeam = require('../controllers/handleSelectTeam');
const handleLeaveTeam = require('../controllers/handleLeaveTeam');
const displayTeamManager = require('../controllers/displayTeamManager');
const handleEditTeamInfo = require('../controllers/handleEditTeamInfo');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload, response) => handleSelectTeam(web, payload, Team));

  // Handles removing the current user when they click "leave" from the team
  slackInteractions.action({ actionId: 'leave_team' }, (payload, response) => handleLeaveTeam(web, payload, Team));

  // Handles opening the modal for managing the user's team
  slackInteractions.action({ actionId: 'manage_team' }, (payload, response) => displayTeamManager(web, payload, Team));

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => displayTeamCreate(web, payload.trigger_id));

  // Handles the user's submission of the "team create" modal
  slackInteractions.viewSubmission({ callbackId: 'submit_team' }, (payload) => createTeam(payload, Team));

  // Handles the user's submission of the "edit team info" modal
  slackInteractions.viewSubmission({ callbackId: 'edit_team_info' }, (payload) => handleEditTeamInfo(payload, Team));

}