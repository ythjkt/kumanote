let initialState = [
  {
    id: 0,
    title: 'First Entry',
    content: 'My first blog entry'
  },
  {
    id: 1,
    title: 'Second Entry',
    content: 'My first blog entry'
  }
]

const notes = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content
        }
      ]
    default:
      return state
  }
}

export default notes
