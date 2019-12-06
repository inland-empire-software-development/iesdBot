const addUserToTeam = require('./addUserToTeam');
const generateTeamView = require('./generateTeamBlock');

const handleSelectTeam = async (web, payload, Team) => {
  addUserToTeam(payload, Team);
  const teamBlock = await generateTeamView(Team);
  axios.post(payload.response_url, {
    replace_original: true,
    blocks: teamBlock
  }).then(resp => {
    console.log(resp);
  }).catch(err => {
    console.log('err', err);
  })
  // web.chat.update({
  //   channel: payload.channel.id,
  //   ts: payload.message.ts,
  //   blocks: teamBlock
  // });
}

module.exports = handleSelectTeam;