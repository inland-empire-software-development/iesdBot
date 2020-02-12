const RequestToActions = (requestingUser, teamName) => {
  const actionData = {
    requestingUser,
    teamName
  }

  const actionDataJSON = JSON.stringify(actionData);
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
        value: actionDataJSON,
        action_id: "accept_request_to_join"
      },
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Decline",
          emoji: true
        },
        value: actionDataJSON,
        action_id: "decline_request_to_join"
      },
    ]
  }
}

module.exports = RequestToActions;