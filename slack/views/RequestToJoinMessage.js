const RequestToJoinMessage = () => {
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
        value: "accept_request_to_join"
      },
      {
        type: "button",
        text: {
          type: "plain_text",
          text: "Decline",
          emoji: true
        },
        value: "decline_request_to_join"
      },
    ]
  }
}

module.exports = RequestToJoinMessage;