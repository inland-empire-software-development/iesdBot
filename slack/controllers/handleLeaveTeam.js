// controllers
const refreshTeamMessage = require('./refreshTeamMessage');
const removeUserFromTeam = require('./removeUserFromTeam');

const SectionText = require('../views/SectionText');

const handleLeaveTeam = async (web, payload, db) => {
  await removeUserFromTeam(payload, db);

  refreshTeamMessage(db, payload);

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
