const TeamGreeting = (eventName) => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `Hello, below are the available teams for *${eventName}*.`
    }
  }
}

module.exports = TeamGreeting;