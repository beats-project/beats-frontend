import { CLEAR_ALL_PROJECTS } from './ActionTypes'

export const clearProjects = () => async dispatch => {
  dispatch({
    type: CLEAR_ALL_PROJECTS,
    payload: { projects: [] },
  })
}
