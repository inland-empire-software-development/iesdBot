// Database
const Team = require('../../../models/Team');

// Controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const removeUserFromTeam = require('./removeUserFromTeam');

const SectionText = require('../../views/teamViews/SectionText');

const handleLeaveTeam = async (web, payload) => {
  await removeUserFromTeam(payload, Team);

  refreshTeamMessage(web, Team, payload);

  web.views.update({
    view_id: payload.view.id,
    view: {
      title: {
        type: "plain_text",
        text: "Edit Team Info",
        emoji: true
      },
      type: "modal",
      close: {
        type: "plain_text",
        text: "Close",
        emoji: true
      },
      callback_id: "edit_team_info",
      blocks: [
        SectionText('You have successfully left the team.')
      ]
    }
  });
}

module.exports = handleLeaveTeam;
