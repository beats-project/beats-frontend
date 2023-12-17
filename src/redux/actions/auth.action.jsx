import { postRequest } from '../../axios/axiosClient'
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './ActionTypes'
// import {toast} from "react-toastify"
import toast from 'react-hot-toast'
import { getFromLS, removeFromLS, setToLS } from '../../utils'
export const login = (email, password) => async dispatch => {
  toast.promise(
    postRequest('login', { email, password }),
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
