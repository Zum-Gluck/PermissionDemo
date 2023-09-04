import axios from 'axios'
import store from '@/store'
import { getToken, removeToken } from '@/utils/token'

import router from '@/router'

const instance = axios.create({
  baseURL: 'http://localhost:3000', // url = base url + request url
  timeout: 5000 // request timeout
})

instance.interceptors.request.use(
  async config => {
    // do something before request is sent
    const token = store.getters.token
    if (token) {
      config.headers['token'] = getToken()
    }
    return config
  },

  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },

  error => {
    if (error.response.status === 401) {
      removeToken()
      router.push('/login')
    }
    return Promise.reject(error.response.data)
  }
)

export default instance
