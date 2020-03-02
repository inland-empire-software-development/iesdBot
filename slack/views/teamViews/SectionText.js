const SectionText = (text) => {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text
    }
  }
}

module.exports = SectionText;