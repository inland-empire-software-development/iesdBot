const TeamGreeting = require('./TeamGreeting');
const Divider = require('./Divider');
const TeamEventInfo = require('./TeamEventInfo');
const TeamCreateButton = require('./TeamCreateButton');
const TeamManageButton = require('./TeamManageButton');
const SectionText = require('./SectionText');

const TeamInfo = require('./TeamInfo');
const TeamInfoWithButton = require('./TeamInfoWithButton');

// Move this to its own file later????
const generateListOfTeamsWithButton = (teams) => {
  if(teams.length <= 0){
    return [SectionText(`There are no available teams at this time.`)]
  }

  const ListOfTeams = teams.map(team => {
    const { teamName, teamMembers, requestedMembers } = team;

    if(requestedMembers.length > 0){
      return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, team.teamSetting, "Cancel Request", "display_cancel_request");
    }

    if(teamMembers.length >= 5){
      return TeamInfo(teamName, teamMembers,teamMembers.length, 'Closed');
    }

    switch(team.teamSetting){
      case "Open":
        return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, team.teamSetting, "Choose", "team_select");
      case "Invite":
        return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, team.teamSetting, "Request To Join", "request_to_join");
      default:
        return TeamInfo(teamName, teamMembers, teamMembers.length, team.teamSetting);
    }
  });

  return ListOfTeams;
}

const generateListOfTeamsWithUserTeam = (teams, userTeam, isOwner) => {
  const ListOfTeams = teams.map(team => {
    const { teamName, teamMembers } = team;
    let { teamSetting } = team;
    
    if(teamMembers.length >= 5){
      teamSetting = 'Closed';
    }

    if(teamName !== userTeam.teamName){
      return TeamInfo(teamName, teamMembers, teamMembers.length, teamSetting);
    }

    if(isOwner){
      return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, teamSetting, "Manage", "manage_team");
    } else {
      return TeamInfoWithButton(teamName, teamMembers, teamMembers.length, teamSetting, "Manage", "view_team");
    }

  });

  return ListOfTeams;
}

const Team = (teams, userTeam, isOwner) => {
  let ListOfTeams = [];
  if(userTeam){
    ListOfTeams = generateListOfTeamsWithUserTeam(teams, userTeam, isOwner);

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