import {
  GET_PAGE_HEADING,
  GET_TODOS,
  SET_PAGE_HEADING,
} from '../actions/ActionTypes'

const initialState = { pageHeading: 'Beats', todos: [] }

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_HEADING: {
      return { pageHeading: action.payload }
    }
    case GET_PAGE_HEADING: {
      return state
    }
    case GET_TODOS: {
      return { ...state, todos: action.payload }
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return state.map(todo => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter(todo => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map(todo => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter(todo => !todo.completed)
    }
    case 'todos/todosLoaded': {
      return action.payload
    }
    default:
      return state
  }
}

export const getPageHeading = state => state.appData.pageHeading
