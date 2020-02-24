const axios = require('axios');
const moment = require('moment');

const retrieveHackdayInfo = async () => {
  let hackDayDate;

  const response = await axios.get('https://api.meetup.com/iesd-meetup/events?&sign=true&photo-host=public');
  const events = response.data;
  const listOfHackdays = [];

  for(const event of events){
    if(event.name.includes('Hack Day')){
      listOfHackdays.push(event);
    }
  }

  if(listOfHackdays.length > 0){
    hackDayDate = listOfHackdays[0];
  } else {
    // TEMPORARY until logic is changed
    return {
      eventName: "Hack Day",
      eventLink: "https://www.meetup.com/iesd-meetup/",
      eventDate: "Saturday, February 29th 2020",
      eventStartTime: "2:00 pm",
      eventEndTime: "8:00 pm",
      eventLocation: "ExCITE Riverside",
      eventRSVPCount: "32"
    }
  }

  const eventName = hackDayDate.name;
  const eventLink = hackDayDate.link;
  const eventDate = new moment(hackDayDate.time - 28800000).format("dddd, MMMM Do YYYY");
  const eventStartTime = new moment(hackDayDate.time - 28800000).format("h:mm a");
  const eventEndTime = new moment(hackDayDate.time - 28800000 + hackDayDate.duration).format("h:mm a");
  const eventLocation = hackDayDate.venue.name;
  const eventRSVPCount = hackDayDate.yes_rsvp_count;

  return {
    eventName,
    eventLink,
    eventDate,
    eventStartTime,
    eventEndTime,
    eventLocation,
    eventRSVPCount
  }
}

module.exports = retrieveHackdayInfo;