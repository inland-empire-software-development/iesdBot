const TeamInfo = (teamName, teamMembers, teamSize, teamSetting) => {
  const teamMemberMentions = teamMembers.map(member => ` <@${member}>`);

  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${teamName} (${teamSize}) (${teamSetting})*\n${teamMemberMentions}\n`
    }
  }
};

module.exports = TeamInfo;