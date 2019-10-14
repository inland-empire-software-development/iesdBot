const { displayTeamCreate } = require('../controllers/displayTeamCreate');

module.exports = (slackInteractions, web) => {

  slackInteractions.action({ actionId: 'create_team'}, (payload, response) => displayTeamCreate(web, payload.trigger_id));
  
}