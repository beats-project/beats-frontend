import store from '../redux/store/store'
import axios from 'axios'

function select(state) {
  return state.authReducer.user.refreshToken
}

export const refreshAccessToken = async () => {
  const refreshToken = select(store.getState())
  let token = null
  axios
    .post(
      'http://localhost:8080/api/v1/auth/refresh-token',
      {},
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    )
    .then(res => {
      token = res.data.data.accessToken
    })
    .catch(err => err)
  return token
}
