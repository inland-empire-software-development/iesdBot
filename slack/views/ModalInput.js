const ModalInput = (inputType, actionId, placeHolderText, labelText) => {
  return {
    type: "input",
    element: {
      type: inputType,
      action_id: actionId,
      placeholder: {
        type: "plain_text",
        text: placeHolderText
      },
    },
    label: {
      type: "plain_text",
      text: labelText
    }
  }
}

module.exports = ModalInput;