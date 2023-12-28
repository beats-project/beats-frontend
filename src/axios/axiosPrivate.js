import axios from 'axios'
import { getFromLS, setToLS } from '../utils'
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

instance.interceptors.response.use(
  response => response,
  async error => {
    const config = error?.config

    if (error?.response?.status === 403 && !config?.sent) {
      config.sent = true
      console.log('403 Request')

      const res = await axios.post(
        'http://localhost:8080/api/v1/auth/refresh-token',
        {},
        {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(getFromLS('user'))?.refreshToken
            }`,
          },
        },
      )
      console.log(res.data.data.accessToken)
      const user = JSON.parse(getFromLS('user'))
      const newUser = {
        ...user,
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken,
      }
      setToLS('user', JSON.stringify(newUser))

      return instance(config)
    }
    return Promise.reject(error)
  },
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
