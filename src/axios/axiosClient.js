import axios from 'axios'
import { BASE_AUTH_URL } from '../utils/constants'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = 'http://localhost:8080/api/v1/auth'

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
}

//All request will wait 10 seconds before timeout
axiosClient.defaults.timeout = 10000

export function getRequest(URL) {
  return axiosClient.get(`/${URL}`).then(response => response)
}

export function postRequest(URL, payload) {
  return axiosClient.post(`/${URL}`, payload)
}

export function patchRequest(URL, payload) {
  return axiosClient.patch(`/${URL}`, payload).then(response => response)
}

export function deleteRequest(URL) {
  return axiosClient.delete(`/${URL}`).then(response => response)
}
