const displayTeamCreate = require('../controllers/displayTeamCreate');
const createTeam = require('../controllers/createTeam');
const handleSelectTeam = require('../controllers/handleSelectTeam');
const handleLeaveTeam = require('../controllers/handleLeaveTeam');
const displayTeamManager = require('../controllers/displayTeamManager');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload, response) => handleSelectTeam(web, payload, Team));

  // Handles removing the current user when they click "leave" from the team
  // slackInteractions.action({ actionId: 'leave_team' }, (payload, response) => handleLeaveTeam(payload, Team));
  slackInteractions.action({ actionId: 'leave_team' }, (payload, response) => {
    console.log(payload);
  })

  // Handles opening the modal for managing the user's team
  slackInteractions.action({ actionId: 'manage_team' }, (payload, response) => displayTeamManager(web, payload.trigger_id));

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => displayTeamCreate(web, payload.trigger_id));

  // Handles the user's submission of the "team create" modal
  slackInteractions.viewSubmission({ callbackId: 'submit_team' }, (payload) => createTeam(payload, Team))

}