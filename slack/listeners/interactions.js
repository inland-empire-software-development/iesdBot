const displayTeamCreate = require('../controllers/displayTeamCreate');
const createTeam = require('../controllers/createTeam');
const addUserToTeam = require('../controllers/addUserToTeam');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => displayTeamCreate(web, payload.trigger_id));

  slackInteractions.action({ view: { callbackId: 'submit_team'} }, (payload, response) => createTeam(payload, Team));

  slackInteractions.action({ actionId: 'team_select' }, (payload, response) => addUserToTeam(payload, Team));

}