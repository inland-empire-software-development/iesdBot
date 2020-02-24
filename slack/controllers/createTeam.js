const axios = require('axios');
const Team = require('../../models/Team');

// const createTeam = async (payload, db) => {
const createTeam = async (teamName, teamMembers, teamSetting, payload) => {
  const teamOwner = payload.user.id;
  let hackDayDate;

  const meetupRequest = await axios.get('https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public');
  const events = meetupRequest.data;
  const listOfHackdays = [];

  for(const event of events){
    /**
     * Currently working on a new solution
     * since the logic for this is flawed
     */
    if(event.name.includes('Hack Day')){
      listOfHackdays.push(event.local_date);
    }
  }

  if(listOfHackdays.length > 0){
    hackDayDate = listOfHackdays[0];
  } else {
    hackDayDate = new Date();
  }

  return Team.create({
    teamName,
    teamOwner,
    teamMembers,
    teamSetting,
    dateOfEvent: hackDayDate
  });

}

module.exports = createTeam;