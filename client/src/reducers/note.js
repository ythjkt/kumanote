const note = (state = 0, action) => {
  switch (action.type) {
    case 'SELECT_NOTE':
      return action.payload.id
    default:
      return state
  }
}

export default note
