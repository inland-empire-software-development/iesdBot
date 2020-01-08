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
  slackInteractions.action({ actionId: 'leave_team' }, (payload, response) => handleLeaveTeam(web, payload, Team));

  // Handles opening the modal for managing the user's team
  slackInteractions.action({ actionId: 'manage_team' }, (payload, response) => displayTeamManager(web, payload, Team));

  // Handles displaying the "team create" modal
  slackInteractions.action({ actionId: 'create_team' }, (payload, response) => displayTeamCreate(web, payload.trigger_id));

  // Handles the user's submission of the "team create" modal
  slackInteractions.viewSubmission({ callbackId: 'submit_team' }, (payload) => createTeam(payload, Team));

  // Handles the user's submission of the "edit team info" modal
  slackInteractions.viewSubmission({ callbackId: 'edit_team_info' }, async (payload) => {
    const values = payload.view.state.values;

    let teamName;
    const teamOwner = payload.user.id;
    let teamMembers;
    let teamSetting;
    let hackDayDate;
  
    for(let value in values){
      if(values[value].hasOwnProperty('team_name')){
        teamName = values[value].team_name.value;
      } else if(values[value].hasOwnProperty('members')){
        teamMembers = values[value].members.selected_users;
        teamMembers.unshift(payload.user.id);
      } else {
        teamSetting = values[value].group_settings.selected_option.value;
      }
    }

    console.log(teamName);
    console.log(teamSetting);
    console.log(teamMembers);

    const test = await Team.find({ teamName })
    console.log(test);
    console.log('dang');
    // Team.findOneAndUpdate({ teamName }, {
    //   teamName: 'WOW'
    // });
  });

}