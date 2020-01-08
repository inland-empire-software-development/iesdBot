const TeamModalSettingSelect = (initialOptionValue) => {

  const initialOption = {
    text: {
      type: "plain_text",
      text: "",
      emoji: true
    },
    value: ""
  }

  switch(initialOptionValue){
    case "open":
      initialOption.text.text = "Open";
      initialOption.value = "open"
      break;
    case "invite":
      initialOption.text.text = "Invite Only",
      initialOption.value = "invite"
    case "closed":
      initialOption.text.text = "Closed",
      initialOption.value = "closed"
  }

  return {
    type: "input",
    element: {
      type: "static_select",
      action_id: "group_settings",
      placeholder: {
        type: "plain_text",
        text: "Group Settings",
        emoji: true
      },
      initial_option: initialOption,
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