const TeamEventInfo = (eventLink, eventName, eventDate, eventStartTime, eventEndTime, eventLocation, eventRSVPCount) => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*<${eventLink}| ${eventName}>*\n${eventDate} \n${eventStartTime} - ${eventEndTime}\n${eventLocation}\n${eventRSVPCount} members have RSVP\n\n\n *Current teams:*`
    },
    accessory: {
      type: "image",
      image_url: "https://secure.meetupstatic.com/photos/event/8/a/a/9/highres_484355497.jpeg",
      alt_text: "IESD Logo"
    }
  };
}

module.exports = TeamEventInfo;