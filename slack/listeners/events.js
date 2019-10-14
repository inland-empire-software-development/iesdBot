const { displayTeam } = require('../controllers/displayTeam');

module.exports = (slackEvents, web) => {

  // Listens for incoming "app mentions"
  slackEvents.on('app_mention', (event) => {

    if(event.text.includes("team")) return displayTeam(web);

  });

}