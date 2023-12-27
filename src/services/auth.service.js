import Client from '../axios/api'

import { axiosPublic } from '../axios/axiosPublic'
import axiosPrivate from '../axios/axiosPrivate'
import TokenService from './token.service'

const URL_PREFIX = 'auth/'

class AuthService {
  constructor(isPrivate) {
    if (isPrivate == true) {
      this.client = new Client(axiosPrivate)
    } else this.client = new Client(axiosPublic)
  }
  login(email, password) {
    return this.client.post(URL_PREFIX + 'login', {
      email,
      password,
    })
  }

  logout() {
    TokenService.removeUser()
  }

  register(email, password) {}

  getCurrentUser() {
    return TokenService.getUser()
  }
  refreshToken() {
    return this.client.get('demo-controller')
  }
}

export default AuthService
