const note = (state = 0, action) => {
  switch (action.type) {
    case 'SELECT_NOTE':
      return action.id
    default:
      return state
  }
}

export default note
