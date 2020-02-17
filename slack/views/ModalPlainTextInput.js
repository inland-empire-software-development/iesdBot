const ModalPlainTextInput = (actionId, initialValue, placeHolderText, labelText, charLimit) => {
  if(charLimit){
    return {
      type: "input",
      element: {
        type: "plain_text_input",
        action_id: actionId,
        initial_value: initialValue,
        placeholder: {
          type: "plain_text",
          text: placeHolderText
        },
        max_length: charLimit
      },
      label: {
        type: "plain_text",
        text: labelText
      }
    }
  }
  
  return {
    type: "input",
    element: {
      type: "plain_text_input",
      action_id: actionId,
      initial_value: initialValue,
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

module.exports = ModalPlainTextInput;