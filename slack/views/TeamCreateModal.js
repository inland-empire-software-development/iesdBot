const TeamModalSettingSelect = require('./TeamModalSettingSelect');
const ModalMultiUsersSelect = require('./ModalMultiUsersSelect');
const ModalPlainTextInput = require('./ModalPlainTextInput');

const TeamCreateModal = (initialTeamName, initialMembers, initialSetting) => {
  // If no initialSetting provided, default to "Open"
  const teamSetting = initialSetting ? initialSetting : "Open";

  return {
    title: {
      type: "plain_text",
      text: "Create a team",
      emoji: true
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true
    },
    submit: {
      type: "plain_text",
      text: "Create",
      emoji: true,
    },
    callback_id: "submit_team",
    blocks: [
      ModalPlainTextInput(  
        "team_name", // Action ID
        // "", // Initial value
        initialTeamName,
        "What would you like to name your team?", // Placeholder Text
        "Team Name", // Label Text
        54 // Character limit for team name
      ),
      ModalMultiUsersSelect(
        "members", // Action ID
        initialMembers, // Initial Users
        "Who else will be working with you?", // Placeholder Text
        "Members" // Label Text
      ),
      TeamModalSettingSelect(teamSetting)
    ]
  }
}

module.exports = TeamCreateModal;