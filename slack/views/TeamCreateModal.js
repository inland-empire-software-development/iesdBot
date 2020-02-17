const TeamModalSettingSelect = require('./TeamModalSettingSelect');
const ModalMultiUsersSelect = require('./ModalMultiUsersSelect');
const ModalPlainTextInput = require('./ModalPlainTextInput');

const TeamCreateModal = () => {
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
        "", // Initial value
        "What would you like to name your team?", // Placeholder Text
        "Team Name" // Label Text
      ),
      ModalMultiUsersSelect(
        "members", // Action ID
        [], // Initial Users
        "Who else will be working with you?", // Placeholder Text
        "Members" // Label Text
      ),
      TeamModalSettingSelect("Open")
    ]
  }
}

module.exports = TeamCreateModal;