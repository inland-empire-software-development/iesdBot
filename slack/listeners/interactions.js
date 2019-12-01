const displayTeamCreate = require('../controllers/displayTeamCreate');
const createTeam = require('../controllers/createTeam');
const addUserToTeam = require('../controllers/addUserToTeam');
const displayTeam = require('../controllers/displayTeam');
const handleSelectTeam = require('../controllers/handleSelectTeam');
const generateTeamView = require('../controllers/generateTeamBlock');

const Team = require('../../models/Team');

module.exports = (slackInteractions, web) => {

  // slackInteractions.action({ actionId: 'team_select' }, (payload, response) => {
  //   console.log('payload');
  //   // web.im.open({
  //   //   user: 'UERTLGB9C'
  //   // });
  // });
  // Handles adding the current user when they click "choose" to the team
  slackInteractions.action({ actionId: 'team_select' }, (payload, response) => handleSelectTeam(web, payload, Team));
    // slackInteractions.action({ actionId: 'team_select' }, async (payload, response) => {
    //   addUserToTeam(payload, Team);
    //   const teamBlock = await generateTeamView(Team);
    //   web.chat.update({
    //     channel: payload.channel.id,
    //     ts: payload.message.ts,
    //     blocks: teamBlock
    //   });
    // });

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => displayTeamCreate(web, payload.trigger_id));

  // Handles the user's submission of the "team create" modal
  slackInteractions.action({ view: { callbackId: 'submit_team'} }, (payload, response) => createTeam(payload, Team));


  // slackInteractions.action({ actionId: 'team_select' }, (payload, response) => handleSelectTeam(payload, Team));


  // slackInteractions.action({ actionId: 'team_select' }, (payload, response) => {
  //   console.log(payload);
  // });

}