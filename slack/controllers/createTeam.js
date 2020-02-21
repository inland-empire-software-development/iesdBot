const axios = require('axios');
const Team = require('../../models/Team');

// const createTeam = async (payload, db) => {
const createTeam = async (teamName, teamMembers, teamSetting, payload) => {
  const teamOwner = payload.user.id;
  let hackDayDate;

  await axios.get('https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public')
  .then(response => {
    const events = response.data;
    
    for(const event of events){
      /**
       * ADD THIS LINE BACK IN ONCE HACK DAY RETURNS
       * AND MAYBE ADD AN ELSE TO HANDLE WHEN PEOPLE 
       * TRY TO CREATE TEAMS WITHOUT A FUTURE HACK DAY
       */
      // if(event.name.includes('Hack Day')){
      //   hackDayDate = event.local_date;

      //   return db.create({
      //     teamName,
      //     teamMembers,
      //     teamSetting,
      //     dateOfEvent: hackDayDate
      //   });
      // }
      hackDayDate = new Date();

      return Team.create({
        teamName,
        teamOwner,
        teamMembers,
        teamSetting,
        dateOfEvent: hackDayDate
      });
    }
  })
  .catch(err => {
    // Add error handling later
    console.log(err);
  });

}

module.exports = createTeam;