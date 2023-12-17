// import { getAPI } from '../../api'
// import { useAxios } from '../../hooks/useAxios'
import * as types from './ActionTypes'

// Thunk function
export function getPageHeading(dispatch, getState) {
  dispatch({ type: types.GET_PAGE_HEADING, payload: [] })
}

export function setPageHeading(pageHeading) {
  return function saveNewTodoThunk(dispatch, getState) {
    dispatch({ type: types.SET_PAGE_HEADING, payload: pageHeading })
  }
}

// export function getTodos() {
//   return async function saveNewTodoThunk(dispatch, getState) {
//     const initialTodos = await getAPI('/todos/')
//     dispatch({ type: types.GET_TODOS, payload: initialTodos.data })
//   }
// }
