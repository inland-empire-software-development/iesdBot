const axios = require('axios');

const createTeam = (payload, db) => {
  const values = payload.view.state.values;

  let teamName;
  let teamMembers;
  let teamSetting;
  let hackDayDate;

  for(let value in values){
    if(values[value].hasOwnProperty('team_name')){
      teamName = values[value].team_name.value;
    } else if(values[value].hasOwnProperty('members')){
      teamMembers = values[value].members.selected_users;
    } else {
      teamSetting = values[value].group_settings.selected_option.value;
    }
  }

  return axios.get('https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public')
  .then(response => {
    const events = response.data;
    
    for(const event of events){
      if(event.name.includes('Hack Day')){
        hackDayDate = event.local_date;

        return db.create({
          teamName,
          teamMembers,
          teamSetting,
          dateOfEvent: hackDayDate
        });
      }
    }
  })
  .catch(err => {
    // Add error handling later
    console.log(err);
  });

}

module.exports = {
  createTeam
}