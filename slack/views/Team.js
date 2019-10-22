const TeamGreeting = require('./TeamGreeting');
const Divider = require('./Divider');
const TeamEventInfo = require('./TeamEventInfo');
const TeamCreateButton = require('./TeamCreateButton');

let TeamInfo = require('./TeamInfo');

const Team = (teams) => {
  const ListOfTeams = teams.map(team => {
    const { teamName, teamMembers } = team;

    return TeamInfo(teamName, teamMembers, teamMembers.length);
  });

  return [
    TeamGreeting(),
    Divider(),
    TeamEventInfo(),
    Divider(),
    ...ListOfTeams,
    Divider(),
    TeamCreateButton()
  ]
}

module.exports = Team