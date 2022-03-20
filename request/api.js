// 开发的服务器
 var baseUrl = 'http://kumanxuan1.f3322.net:8001'
// 测试的服务器
// var baseUrl = 'http://192.168.113.116:8637'
// 正式环境
//var baseUrl = 'http://www.mysite.com'

//首页数据
var homeApi = baseUrl + '/index/index'
//登录接口（没有账号自动注册）
var loginApi = baseUrl + '/auth/loginByWeb'
// var listApi = baseUrl + '/topic/list'

module.exports = {
  homeApi: homeApi,
  // listApi: listApi,
  loginApi: loginApi
}