import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './ActionTypes'
import toast from 'react-hot-toast'
import { getFromLS, removeFromLS, setToLS } from '../../utils'
import { getRequest, postRequest } from '../../axios/axiosClient'
import apiClientPrivate from '../../axios/axiosConfig'

const URL_PREFIX = 'auth/'

export const login = (email, password) => async dispatch => {
  toast.promise(
    postRequest(URL_PREFIX + 'login', { email, password }),
    {
      loading: 'Please wait...',
      success: res => {
        setToLS('user', JSON.stringify(res.data.data))
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: res.data.data },
        })
        return res.data.message.details
      },
      error: err => err.response.data.message.details,
    },
    {
      style: {
        minWidth: 'fit-content',
        display: 'flex',
      },
      success: {
        duration: 2000,
        style: {
          color: '#00A36C',
        },
      },
      error: {
        duration: 5000,
        style: {
          color: '#D70040',
        },
      },
    },
  )
}

export const logout = () => async dispatch => {
  removeFromLS('user')
  dispatch({
    type: LOGOUT,
  })
  toast.success('Logged out')
}

export const refreshToken = () => async (dispatch, getState) => {
  const accessToken = getState().authReducer.user.accessToken
  // getRequest('demo-controller', {
  //   headers: {
  //     Authorization: 'Bearer ' + accessToken,
  //   },
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  apiClientPrivate
    .get('demo-controller')
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
