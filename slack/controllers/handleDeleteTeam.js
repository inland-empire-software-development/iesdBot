const axios = require('axios');

// lib
const client = require('../../lib/redis');

// controllers
const generateTeamBlock = require('./generateTeamBlock');
const removeTeam = require('./removeTeam');
const refreshTeamMessage = require('./refreshTeamMessage');

// views
const SectionText = require('../views/SectionText');

const handleDeleteTeam = async (web, payload, db) => {
  await removeTeam(payload, db)

  // Reload displayed teams in original message
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
        SectionText('Team successfully disbanded.')
      ]
    }
  });
}

module.exports = handleDeleteTeam;