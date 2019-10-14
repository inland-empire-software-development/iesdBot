const TeamGreeting = require('./TeamGreeting')();
const Divider = require('./Divider')();
const TeamEventInfo = require('./TeamEventInfo')();
const TeamInfo = require('./TeamInfo')();
const TeamCreateButton = require('./TeamCreateButton')();

const Team = () => {
  return [
    TeamGreeting,
    Divider,
    TeamEventInfo,
    Divider,
    TeamInfo,
    Divider,
    TeamCreateButton
  ]
}

module.exports = Team