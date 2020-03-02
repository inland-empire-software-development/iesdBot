const RequestToJoinActions = (teamName, userID, username) => {
  const data = {
    teamName,
    userID,
    username
  }

  const dataJSON = JSON.stringify(data);

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
        value: dataJSON,
        action_id: "accept_request_to_join"
      },
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Decline",
          emoji: true
        },
        value: dataJSON,
        action_id: "decline_request_to_join"
      },
    ]
  }
}

module.exports = RequestToJoinActions;