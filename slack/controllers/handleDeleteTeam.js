const axios = require('axios');

// lib
const client = require('../../lib/redis');

// controllers
const generateTeamBlock = require('./generateTeamBlock');
const removeTeam = require('./removeTeam');

// views
const SectionText = require('../views/SectionText');

const handleDeleteTeam = async (web, payload, db) => {
  await removeTeam(payload, db)

  const teamBlock = await generateTeamBlock(db, payload.user.id);

  const responseURL = await client.getResponseURL(payload.user.id);

  axios.post(responseURL, {
    replace_original: 'true',
    blocks: teamBlock
  });

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