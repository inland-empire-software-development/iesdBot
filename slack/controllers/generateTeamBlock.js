const axios = require('axios');
let Team = require('../views/Team');

const generateTeamBlock = async (db, userId) => {

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
  const teams = await db.find().populate({ 
    path: 'requestedMembers', 
    match: { requestingUser: userId}
  });

  const userTeam = await db.find({ teamMembers: userId });
  let teamOwner;
  let isOwner = false;

  // If db was able to find user's team, assign teamOwner and isOwner
  if(userTeam.length > 0){
    teamOwner = userTeam[0].teamOwner;
    isOwner = teamOwner === userId;
  }

  const teamBlock = await Team(teams, userTeam[0], isOwner);
  return teamBlock;
}

module.exports = generateTeamBlock;