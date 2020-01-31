const ConfirmationModal = (title, message, submitBtn, callback_id) => {
  return {
    title: {
      type: "plain_text",
      text: title,
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
      text: submitBtn,
      emoji: true,
    },
    callback_id,
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: message
        }
      }
    ]
  }
}

module.exports = ConfirmationModal;