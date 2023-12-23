import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = BASE_URL

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
}
axios.defaults.withCredentials = true

//All request will wait 10 seconds before timeout
axiosClient.defaults.timeout = 10000

export function getRequest(URL, payload) {
  return axiosClient.get(`/${URL}`, payload)
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
