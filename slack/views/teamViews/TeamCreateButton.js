const TeamCreateButton = () => {
  return {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Create a team",
        },
        action_id: "create_team"
      }
    ]
  }
}

module.exports = TeamCreateButton;