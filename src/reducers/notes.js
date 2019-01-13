let initialState = {
  0: {
    id: 0,
    title: 'First Entry',
    content: 'My first blog entry'
  },
  1: {
    id: 1,
    title: 'Second Entry',
    content: 'My first blog entry'
  }
}

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
    case 'EDIT_NOTE':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: action.title,
          content: action.content
        }
      }
    default:
      return state
  }
}

export default notes
