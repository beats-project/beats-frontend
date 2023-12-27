import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import store from '../redux/store/store'
import { getFromLS, setToLS } from '../utils'

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173/',
  },
  timeout: 10000,
})

// store.subscribe(listener)

function select(state) {
  return state.authReducer.user.accessToken
}

// function listener() {
//   let token = select(store.getState())
//   axios.defaults.headers.common['Authorization'] = 'Bearer +' + token
// }

const apiClientPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173/',
  },

  timeout: 10000,
})

apiClientPrivate.interceptors.request.use(
  config => {
    let token = select(store.getState())
    let accessToken = JSON.parse(getFromLS('user'))?.accessToken
    // if (!config.headers['Authorization']) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
    // }
    return config
  },
  error => Promise.reject(error),
)

apiClientPrivate.interceptors.response.use(
  response => response,
  async error => {
    const prevRequest = error?.config
    let accessToken, newRefreshToken
    console.log(prevRequest.headers['Authorization'])
    if (error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true
      // console.log('Access', store.getState().authReducer.user.accessToken)
      let refreshToken = store.getState().authReducer.user.refreshToken
      try {
        const resp = await axios.post(
          'http://localhost:8080/api/v1/auth/refresh-token',
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        )
        accessToken = resp.data.data.accessToken
        newRefreshToken = resp.data.data.refreshToken
        console.log(accessToken)
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
        const user = JSON.parse(getFromLS('user'))
        console.log(user)
        user.accessToken = accessToken
        user.refreshToken = newRefreshToken
        console.log(user)
        setToLS('user', JSON.stringify(user))
      } catch (err) {
        // Handle Error Here
        console.error(err)
        return Promise.reject(error)
      }
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      // apiClientPrivate.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      // console.log(
      //   'New Access',
      //   apiClientPrivate.defaults.headers.common.Authorization,
      // )
      // return prevRequest

      // return apiClientPrivate(prevRequest)
      // const newAccessToken = await refresh()
      // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
      return apiClientPrivate(prevRequest)
    }
    return Promise.reject(error)
  },
)

export default apiClientPrivate
