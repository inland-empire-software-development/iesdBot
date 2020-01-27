const TeamCreateButton = (action_id) => {
  return {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Manage",
        },
        action_id: action_id
      }
    ]
  }
}

module.exports = TeamCreateButton;