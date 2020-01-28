const TeamGreeting = require('./TeamGreeting');
const Divider = require('./Divider');
const TeamEventInfo = require('./TeamEventInfo');
const TeamCreateButton = require('./TeamCreateButton');
const TeamManageButton = require('./TeamManageButton');

const TeamInfo = require('./TeamInfo');
const TeamInfoWithButton = require('./TeamInfoWithButton');

// Move this to its own file later????
const generateListOfTeamsWithButton = (teams) => {
  const ListOfTeams = teams.map(team => {
    const { teamName, teamMembers } = team;

    switch(team.teamSetting){
      case "Open":
        return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, team.teamSetting, "Choose", "team_select");
      case "Invite":
        return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, team.teamSetting, "Request To Join", "team_select");
      default:
        return TeamInfo(teamName, teamMembers, teamMembers.length, team.teamSetting);
    }
  });

  return ListOfTeams;
}

const generateListOfTeamsWithUserTeam = (teams, userTeam, teamOwner, isOwner) => {
  const ListOfTeams = teams.map(team => {
    const { teamName, teamMembers } = team;
    if(teamName !== userTeam.teamName){
      return TeamInfo(teamName, teamMembers, teamMembers.length, team.teamSetting);
    }

    if(isOwner){
      return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, team.teamSetting, "Manage", "manage_team");
    } else {
      return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, team.teamSetting, "Manage", "view_team");
    }

  });

  return ListOfTeams;
}

const Team = (teams, userTeam, teamOwner, isOwner) => {
  let ListOfTeams = [];
  if(userTeam){
    ListOfTeams = generateListOfTeamsWithUserTeam(teams, userTeam, teamOwner, isOwner);

    if(isOwner){
      return [
        TeamGreeting(),
        Divider(),
        TeamEventInfo(),
        Divider(),
        ...ListOfTeams,
        Divider(),
        TeamManageButton('manage_team')
      ]
    } else {
      return [
        TeamGreeting(),
        Divider(),
        TeamEventInfo(),
        Divider(),
        ...ListOfTeams,
        Divider(),
        TeamManageButton('view_team')
      ]
    }

  } else {
    ListOfTeams = generateListOfTeamsWithButton(teams);

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
}

module.exports = Team