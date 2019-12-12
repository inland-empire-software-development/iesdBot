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
      {
        type: "section",
        text: {
          type: "mrkdwn",
          // text: `*${teamName} (${teamSize})*\n${teamMemberMentions}\n`
          text: '*Team Name:*'
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: 'Test name'
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: 'edit',
          },
          value: 'test',
          action_id: 'test'
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: '*Members:*'
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: 'Johnathan'
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: 'kick',
          },
          value: 'test',
          action_id: 'test'
        }
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: '*Group Setting*'
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: 'Open'
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: 'change',
          },
          value: 'test',
          action_id: 'test'
        }
      },
    ]
  }
}

module.exports = TeamManagerModal;