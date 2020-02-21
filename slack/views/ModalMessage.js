const SectionText = require('./SectionText');

const ModalMessage = (title, message, submitBtn, callback_id, private_metadata) => {
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
    private_metadata,
    callback_id,
    blocks: [
      SectionText(message)
    ]
  }
}

module.exports = ModalMessage;