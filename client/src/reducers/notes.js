const initialState = {
  1: {
    id: 1,
    title: 'first note',
    content: 'content first note'
  },
  2: {
    id: 2,
    title: 'second note',
    content: 'content secont note'
  }
}

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        [action.id]: {
          id: action.id,
          title: 'untitled',
          content: ''
        }
      }
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
