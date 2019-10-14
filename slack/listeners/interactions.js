const { displayTeamCreate } = require('../controllers/displayTeamCreate');
const { createTeam } = require('../controllers/createTeam');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => displayTeamCreate(web, payload.trigger_id));

  slackInteractions.action({ type: 'view_submission' }, (payload, response) => createTeam(payload, Team));

}