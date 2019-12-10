const axios = require('axios');
let Team = require('../views/Team');

const displayTeam = async (web, db, event) => {

  let hackDayDate;

  const response = await axios.get('https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public');
  const events = response.data;

  for(const event of events){
    if(event.name.includes('Hack Day')){
      hackDayDate = event.local_date;
    }
  }

  /**
   * ADD THIS LINE BACK IN ONCE HACK DAY IS BACK
   * COMMENTED OUT FOR TESTING PURPOSES
   */
  // let teams = await db.find({ dateOfEvent: hackDayDate });
  const teams = await db.find();

  const userTeam = await db.find({ teamMembers: event.user });
  
  const message = {
    channel: 'iesd-bot',
    user: event.user,
    blocks: Team(teams, userTeam[0])
  }

  return web.chat.postEphemeral(message);
}

module.exports = displayTeam;