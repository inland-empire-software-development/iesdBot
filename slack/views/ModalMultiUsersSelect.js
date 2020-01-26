const ModalMultiUsersSelect = (actionId, initialUsers, placeHolderText, labelText) => {
  return {
    type: "input",
    element: {
      type: "multi_users_select",
      action_id: actionId,
      initial_users: initialUsers,
      placeholder: {
        type: "plain_text",
        text: placeHolderText
      },
      max_selected_items: 4
    },
    label: {
      type: "plain_text",
      text: labelText
    }
  }
}

module.exports = ModalMultiUsersSelect;