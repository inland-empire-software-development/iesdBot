const displayTeamCreate = require('../controllers/displayTeamCreate');
const createTeam = require('../controllers/createTeam');
const handleSelectTeam = require('../controllers/handleSelectTeam');
const handleLeaveTeam = require('../controllers/handleLeaveTeam');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload, response) => handleSelectTeam(web, payload, Team));

  slackInteractions.action({ actionId: 'leave_team' }, (payload, response) => {
    try{
      handleLeaveTeam(payload, Team)
    } catch(err){
      console.log(err);
    }
  });

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => displayTeamCreate(web, payload.trigger_id));

  // Handles the user's submission of the "team create" modal
  slackInteractions.action({ view: { callbackId: 'submit_team'} }, (payload, response) => createTeam(payload, Team));

}