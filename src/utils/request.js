/*import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

// 封装axios的post 请求
export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  mockdata (url, params) {
    return fetch(url, params)
  }
}*/
import request, {extend} from 'umi-request'
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}
/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response = {} } = error
  const errortext = codeMessage[response.status] || response.statusText
  const { status, url } = response
  console.log('status', status)
  console.log('errortext', errortext)
  console.log('url', url)
}

/**
 * 配置request请求时的默认参数
 */
const requests = extend({
  errorHandler, // 默认错误处理
  credentials: 'include' // 默认请求是否带上cookie
})
// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  return options
})

// response拦截器, 处理response
request.interceptors.response.use((response, options) => {
  return options
})
export default requests
