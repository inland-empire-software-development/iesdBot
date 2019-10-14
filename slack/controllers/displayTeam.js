const Team = require('../views/Team')();

const displayTeam = (web) => {

  const message = {
    channel: 'iesd-bot',
    blocks: Team
  }

  return web.chat.postMessage(message)
}

module.exports = {
  displayTeam
}