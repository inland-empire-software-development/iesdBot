const TeamInfo = (teamName, teamMembers, teamSize) => {
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
        text: "Choose",
      },
      value: teamName,
      action_id: "team_select"
    }
  }
};

module.exports = TeamInfo;