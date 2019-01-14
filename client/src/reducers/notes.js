import arrayToObject from '../utils/arrayToObject'

const notes = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: 'untitled',
          content: ''
        }
      }
    case 'EDIT_NOTE':
      console.log(action)
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content
        }
      }
    case 'GET_NOTES':
      // Return an object with id as key
      let notes = arrayToObject(action.payload, 'id')
      return {
        ...state,
        ...notes
      }
    case 'DELETE_NOTE':
      let newState = { ...state }
      delete newState[action.payload.id]
      return newState
    default:
      return state
  }
}

export default notes
