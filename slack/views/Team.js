const TeamGreeting = require('./TeamGreeting');
const Divider = require('./Divider');
const TeamEventInfo = require('./TeamEventInfo');
const TeamCreateButton = require('./TeamCreateButton');

const TeamInfo = require('./TeamInfo');
const TeamInfoWithButton = require('./TeamInfoWithButton');

// Move this to its own file later????
const generateListOfTeamsWithButton = (teams) => {
  const ListOfTeams = teams.map(team => {
    const { teamName, teamMembers } = team;

    return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, "Choose", "team_select");
  });

  return ListOfTeams;
}

const generateListOfTeamsWithUserTeam = (teams, userTeam) => {
  const ListOfTeams = teams.map(team => {
    const { teamName, teamMembers } = team;
    if(teamName === userTeam.teamName){
      return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, "Leave", "team_select");
    }

    return TeamInfo(teamName, teamMembers, teamMembers.length);
  });

  return ListOfTeams;
}

const Team = (teams, userTeam) => {
  let ListOfTeams = [];
  if(userTeam){
    ListOfTeams = generateListOfTeamsWithUserTeam(teams, userTeam);
  } else {
    ListOfTeams = generateListOfTeamsWithButton(teams);
  }

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