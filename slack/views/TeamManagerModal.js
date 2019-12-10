const ModalInput = require('./ModalInput');
const TeamModalSettingSelect = require('./TeamModalSettingSelect');

const TeamManagerModal = () => {
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
      ModalInput(  
        "plain_text_input", // Input Type
        "team_name", // action id
        "What would you like to name your team?", // Placeholder Text
        "Team Name" // Label Text
      ),
      ModalInput(
        "multi_users_select",
        "members",
        "Who else will be working with you?",
        "Members"
      ),
      TeamModalSettingSelect()
    ]
  }
}

module.exports = TeamManagerModal;