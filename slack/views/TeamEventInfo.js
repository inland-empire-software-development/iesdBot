const TeamEventInfo = () => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "*<https://www.meetup.com/iesd-meetup/events/264486598/| Hack Day September 2019>*\nSaturday, September 28 2:30-7:00pm\nExCite Riverside\n32 members have RSVP\n\n\n *Here are the current teams:*"
    },
    accessory: {
      type: "image",
      image_url: "https://secure.meetupstatic.com/photos/event/8/a/a/9/highres_484355497.jpeg",
      alt_text: "IESD Logo"
    }
  };
}

module.exports = TeamEventInfo;