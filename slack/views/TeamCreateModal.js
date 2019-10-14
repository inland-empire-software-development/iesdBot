const ModalTeamNameInput = require('./ModalInput')(
  "plain_text_input", // Input Type
  "team_name", // action id
  "What would you like to name your team?", // Placeholder Text
  "Team Name" // Label Text
);

const ModalMembersInput = require('./ModalInput')(
  "multi_users_select",
  "members",
  "Who else will be working with you?",
  "Members"
);

const TeamModalSettingSelect = require('./TeamModalSettingSelect')();

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
      emoji: true
    },
    blocks: [
      ModalTeamNameInput,
      ModalMembersInput,
      TeamModalSettingSelect
    ]
  }
}

module.exports = TeamCreateModal