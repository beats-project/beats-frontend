import { GET_ALL_PROJECTS } from '../actions/ActionTypes'

const initialState = { projects: [] }

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PROJECTS: {
      return { ...state, projects: action.payload.projects }
    }

    default:
      return state
  }
}

export const getAllProjects = state => state.projectReducer.projects
