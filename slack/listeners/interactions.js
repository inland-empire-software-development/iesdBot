const displayTeamCreate = require('../controllers/displayTeamCreate');
const createTeam = require('../controllers/createTeam');
const addUserToTeam = require('../controllers/addUserToTeam');
const displayTeam = require('../controllers/displayTeam');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => {
    displayTeamCreate(web, payload.trigger_id);
  });

  // Handles the user's submission of the "team create" modal
  // slackInteractions.action({ view: { callbackId: 'submit_team'} }, (payload, response) => createTeam(payload, Team));
  slackInteractions.action({ view: { callbackId: 'submit_team'} }, (payload, response) => {
    // console.log('response', response);
    const message = {
      channel: 'iesd-bot',
      text: 'Hello world',
      // blocks: Team(teams)
    }
    try{
      displayTeam(web, Team);
    }
    catch(err) {
      console.log('No work', err);
    }
  });

  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload, response) => addUserToTeam(payload, Team));

}