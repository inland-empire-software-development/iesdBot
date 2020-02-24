// Database
const Team = require('../../models/Team');

// Controllers
const removeTeam = require('./removeTeam');
const refreshTeamMessage = require('./refreshTeamMessage');

// Views
const SectionText = require('../views/SectionText');

const handleDeleteTeam = async (web, payload) => {
  await removeTeam(payload, Team);

  // Reload displayed teams in original message
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
        SectionText('Team successfully disbanded.')
      ]
    }
  });
}

module.exports = handleDeleteTeam;