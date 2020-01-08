const client = require('../../lib/redis');

const removeUserFromTeam = require('./removeUserFromTeam');
const generateTeamBlock = require('./generateTeamBlock');
const axios = require('axios');

const SectionText = require('../views/SectionText');

const handleLeaveTeam = async (web, payload, Team) => {
  await removeUserFromTeam(payload, Team);

  const teamBlock = await generateTeamBlock(Team, payload.user.id);

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
        SectionText('You have successfully left the team.')
      ]
    }
  });
}

module.exports = handleLeaveTeam;
