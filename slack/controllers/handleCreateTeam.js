// Database
const Team = require('../../models/Team');

// Controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const createTeam = require('./createTeam');

// Views
const SectionText = require('../views/SectionText');

const handleCreateTeam = async (web, payload, db) => {
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

  const inputData = { teamName, teamOwner, teamMembers, teamSetting };
  const inputDataJSON = JSON.stringify(inputData);
  
  const checkTeamName = await Team.find({ teamName });
  if(checkTeamName.length > 0){
    return {
      response_action: "update",
      view: {
        type: "modal",
        title: {
          type: "plain_text",
          text: "Error"
        },
        submit: {
          type: "plain_text",
          text: "Back",
          emoji: true
        },
        callback_id: "return_to_team_modal",
        private_metadata: inputDataJSON,
        blocks: [
          SectionText('Team name is already taken')
        ]
      }
    }
  } 

  await createTeam(payload, db);

  refreshTeamMessage(web, db, payload);

}

module.exports = handleCreateTeam;