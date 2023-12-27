import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5173/',
  },
})

export const axiosPublic = instance
