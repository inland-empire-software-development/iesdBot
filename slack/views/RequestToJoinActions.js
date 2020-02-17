const RequestToJoinActions = (teamName) => {
  return {
    type: "actions",
    elements: [
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Accept",
          emoji: true
        },
        value: teamName,
        action_id: "team_select"
      },
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Decline",
          emoji: true
        },
        value: teamName,
        action_id: "decline_request_to_join"
      },
    ]
  }
}

module.exports = RequestToJoinActions;