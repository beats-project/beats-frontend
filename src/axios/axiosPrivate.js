import axios from 'axios'
import { getFromLS } from '../utils'
import { BASE_URL } from '../utils/constants'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173/',
  },
})

instance.interceptors.request.use(
  config => {
    let accessToken = JSON.parse(getFromLS('user'))?.accessToken
    // if (!config.headers['Authorization']) {
    config.headers['Authorization'] = `Bearer ${accessToken}`
    // }
    return config
  },
  error => Promise.reject(error),
)

// instance.interceptors.response.use(
//   res => {
//     return res
//   },
//   async err => {
//     const originalConfig = err.config

//     // if (originalConfig.url !== '/auth/signin' && err.response) {
//     // Access Token was expired
//     if (err.response.status == 403 && !originalConfig._retry) {
//       originalConfig._retry = true

//       try {
//         const user = JSON.parse(getFromLS('user'))
//         const rs = await instance.post(
//           'auth/refresh-token',
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${user?.refreshToken}`,
//             },
//           },
//         )

//         console.log(rs.data)
//         //   const { accessToken } = rs.data
//         //   TokenService.updateLocalAccessToken(accessToken)

//         return instance(originalConfig)
//       } catch (_error) {
//         return Promise.reject(_error)
//       }
//     }
//     // }

//     return Promise.reject(err)
//   },
// )

export default instance
