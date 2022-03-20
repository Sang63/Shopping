var api = require('./api.js')
var request = require('./request.js')

// get请求不携带参数
function getHome() {
  return request.requestApi({
    url: api.homeApi
  })
}

// // get请求携带参数
// function getList(params) {
//   return request.requestApi({
//     url: api.listApi,
//     data: params,
//   })
// }

// post请求
function LoginFn(params) {
  return request.requestApi({
    url: api.loginApi,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}

module.exports = {
  getHome: getHome,
  LoginFn: LoginFn,
  
}