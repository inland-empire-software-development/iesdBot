const TeamInfo = () => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: "*Leet Coders (2)*\nJosh, Bill"
    },
    accessory: {
      type: "button",
      text: {
        type: "plain_text",
        text: "Choose"
      }
    }
  }
};

module.exports = TeamInfo;