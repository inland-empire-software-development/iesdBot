const TeamModalSettingSelect = () => {
  return {
    type: "input",
    element: {
      type: "static_select",
      action_id: "group_settings",
      placeholder: {
        type: "plain_text",
        text: "Who else will be working with you?",
        emoji: true
      },
      options: [
        {
          text: {
            type: "plain_text",
            text: "Open",
            emoji: true
          },
          value: "open"
        },
        {
          text: {
            type: "plain_text",
            text: "Invite Only",
            emoji: true
          },
          value: "invite"
        },
        {
          text: {
            type: "plain_text",
            text: "Closed",
            emoji: true
          },
          value: "closed"
        }
      ]
    },
    label: {
      type: "plain_text",
      text: "Group Settings"
    }
  }
}

module.exports = TeamModalSettingSelect;