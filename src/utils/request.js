import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.response.use(
  (response) => {
    const { data } = response

    return data
  },
  (error) => {
    Message.error(error.msg)
    Promise.reject(new Error(error.msg))
  }
)

export default request
