const TeamInfo = (teamName, teamMembers, teamSize) => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${teamName} (${teamSize})*\n${teamMembers}`
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