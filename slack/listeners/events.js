const handleDisplayTeam = require('../controllers/handleDisplayTeam');
const Team = require('../../models/Team');

module.exports = (slackEvents, web) => {

  // Listens for incoming "app mentions"
  slackEvents.on('app_mention', (event) => {

    if(event.text.includes("team")) return handleDisplayTeam(web, Team, event);

    console.log(event);

  });

}