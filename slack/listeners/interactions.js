const { displayTeamCreate } = require('../controllers/displayTeamCreate');

module.exports = (slackInteractions, web) => {
  slackInteractions.action({ type: 'button' }, (payload, response) => {

    if(payload.actions[0].action_id === 'create_team') return displayTeamCreate(web, payload.trigger_id)

  });
}