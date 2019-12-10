const TeamInfo = (teamName, teamMembers, teamSize) => {
  const teamMemberMentions = teamMembers.map(member => ` <@${member}>`);

  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${teamName} (${teamSize})*\n${teamMemberMentions}\n`
    }
  }
};

module.exports = TeamInfo;