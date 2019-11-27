const displayTeamCreate = require('../controllers/displayTeamCreate');
const createTeam = require('../controllers/createTeam');
const addUserToTeam = require('../controllers/addUserToTeam');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => {
    console.log(payload);
    displayTeamCreate(web, payload.trigger_id);
  });

  // Handles the user's submission of the "team create" modal
  // slackInteractions.action({ view: { callbackId: 'submit_team'} }, (payload, response) => createTeam(payload, Team));
  slackInteractions.action({ view: { callbackId: 'submit_team'} }, (payload, response) => {
    console.log(payload.view.state.values);
  });

  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload, response) => addUserToTeam(payload, Team));

}