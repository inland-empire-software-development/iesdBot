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
    case "Open":
      initialOption.text.text = "Open";
      initialOption.value = "Open"
      break;
    case "Invite":
      initialOption.text.text = "Invite Only",
      initialOption.value = "Invite"
    case "Closed":
      initialOption.text.text = "Closed",
      initialOption.value = "Closed"
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
          value: "Open"
        },
        {
          text: {
            type: "plain_text",
            text: "Invite Only",
            emoji: true
          },
          value: "Invite"
        },
        {
          text: {
            type: "plain_text",
            text: "Closed",
            emoji: true
          },
          value: "Closed"
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