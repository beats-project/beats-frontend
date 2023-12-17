import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/ActionTypes'
import { getFromLS } from '../../utils/index.js'

const user = getFromLS('user')

const initialState = user
  ? { isLoggedIn: true, user, isSuccessfull: true }
  : { isLoggedIn: false, user: null, isSuccessfull: false }

export default function authReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isSuccessfull: true,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isSuccessfull: false,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isSuccessfull: false,
      }
    default:
      return state
  }
}

export const getState = (state) => state