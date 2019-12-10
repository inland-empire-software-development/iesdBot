const TeamInfoWithButton = (teamName, teamMembers, teamSize, buttonText, actionId) => {
  const teamMemberMentions = teamMembers.map(member => ` <@${member}>`);

  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${teamName} (${teamSize})*\n${teamMemberMentions}\n`
    },
    accessory: {
      type: "button",
      text: {
        type: "plain_text",
        text: buttonText,
      },
      value: teamName,
      action_id: actionId
    }
  }
};

module.exports = TeamInfoWithButton;