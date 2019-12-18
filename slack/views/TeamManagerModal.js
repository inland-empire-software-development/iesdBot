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
        },
      },
      {
        type: "input",
        element: {
          type: "multi_users_select",
          action_id: "memberasda",
          initial_users: ["UFL9S0KSP"],
          placeholder: {
            type: "plain_text",
            text: "Name of team members"
          },
        },
        label: {
          type: "plain_text",
          text: "Members"
        }
      },
      // {
      //   type: "section",
      //   text: {
      //     type: "mrkdwn",
      //     text: 'Johnathan'
      //   },
      //   accessory: {
      //     type: "button",
      //     text: {
      //       type: "plain_text",
      //       text: 'kick',
      //     },
      //     value: 'test',
      //     action_id: 'test'
      //   }
      // },
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
            action_id: "disband_team"
          }
        ]
      },
    ]
  }
}

module.exports = TeamManagerModal;