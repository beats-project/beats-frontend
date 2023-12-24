import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import store from '../redux/store/store'

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
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

export default apiClientPrivate;
