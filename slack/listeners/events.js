const displayTeam = require('../controllers/displayTeam');
const Team = require('../../models/Team');

module.exports = (slackEvents, web) => {

  // Listens for incoming "app mentions"
  slackEvents.on('app_mention', (event) => {

    if(event.text.includes("team")) return displayTeam(web, Team, event);

  });

}