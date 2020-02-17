const TeamModalSettingSelect = require('./TeamModalSettingSelect');
const ModalPlainTextInput = require('./ModalPlainTextInput');
const ModalMultiUsersSelect = require('./ModalMultiUsersSelect');
const Divider = require('./Divider');

const TeamManagerModal = (teamName, initialUsers, groupSetting) => {
  return {
    title: {
      type: "plain_text",
      text: "Edit Team Info",
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
      text: "Submit",
      emoji: true,
    },
    callback_id: "edit_team_info",
    blocks: [
      ModalPlainTextInput(
        "team_name", // Action ID
        teamName, // Initial value
        "What would you like to name your team?", // Placeholder Text
        "Team Name", // Label Text
        54 // Character limit for team name
      ),
      ModalMultiUsersSelect(
        "members", // Action ID
        initialUsers, // Initial Users
        "Who else will be working with you?", // Placeholder Text
        "Members" // Label Text
      ),
      TeamModalSettingSelect(groupSetting),
      Divider(),
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "LEAVE TEAM",
            },
            style: "danger",
            action_id: "leave_team"
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "DISBAND TEAM",
            },
            style: "danger",
            action_id: "delete_team"
          }
        ]
      },
    ]
  }
}

module.exports = TeamManagerModal;