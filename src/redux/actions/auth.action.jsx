import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_ALL_PROJECTS,
} from './ActionTypes'
import toast from 'react-hot-toast'
import { getFromLS, removeFromLS, setToLS } from '../../utils'
import apiClientPrivate from '../../axios/axiosConfig'
import AuthService from '../../services/auth.service'
import { getRequest } from '../../axios/axiosClient'
import ProjectService from '../../services/project.service'

export const login = (email, password) => async dispatch => {
  toast.promise(
    new AuthService(false).login(email, password),
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

// export const login = (email, password) => async dispatch => {
//   toast.promise(
//     postRequest(URL_PREFIX + 'login', { email, password }),
//     {
//       loading: 'Please wait...',
//       success: res => {
//         setToLS('user', JSON.stringify(res.data.data))
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: { user: res.data.data },
//         })
//         return res.data.message.details
//       },
//       error: err => err.response.data.message.details,
//     },
//     {
//       style: {
//         minWidth: 'fit-content',
//         display: 'flex',
//       },
//       success: {
//         duration: 2000,
//         style: {
//           color: '#00A36C',
//         },
//       },
//       error: {
//         duration: 5000,
//         style: {
//           color: '#D70040',
//         },
//       },
//     },
//   )
// }

export const logout = () => async dispatch => {
  removeFromLS('user')
  dispatch({
    type: LOGOUT,
  })
  toast.success('Logged out')
}

export const refreshToken = () => async (dispatch, getState) => {
  // const accessToken = getState().authReducer.user.accessToken
  const accessToken = JSON.parse(getFromLS('user'))?.accessToken
  // getRequest('demo-controller', {
  //   headers: {
  //     Authorization: 'Bearer ' + accessToken,
  //   },
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  // apiClientPrivate
  //   .get('demo-controller')
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  try {
    const res = await new ProjectService(true).getAllProjects()
    if (res.data?.data)
      dispatch({
        type: GET_ALL_PROJECTS,
        payload: { projects: res.data.data },
      })
    console.log(res.data?.data)
  } catch (err) {
    console.log(err)
  }
}
