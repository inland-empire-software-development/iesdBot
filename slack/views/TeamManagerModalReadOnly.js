const TeamModalSettingSelect = require('./TeamModalSettingSelect');
const ModalPlainTextInput = require('./ModalPlainTextInput');
const ModalMultiUsersSelect = require('./ModalMultiUsersSelect');
const Divider = require('./Divider');

const TeamManagerModalReadOnly = (teamName, initialUsers, groupSetting) => {
  return {
    title: {
      type: "plain_text",
      text: "View Team Info",
      emoji: true
    },
    type: "modal",
    close: {
      type: "plain_text",
      text: "Close",
      emoji: true
    },
    callback_id: "edit_team_info",
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Team Name:*\n ${teamName}`
        },
      },
          {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Members:*\n ${initialUsers}`
        },
      },
          {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Group Setting:*\n ${groupSetting}`
        },
      },
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
          }
        ]
      },
    ]
  }
}

module.exports = TeamManagerModalReadOnly;