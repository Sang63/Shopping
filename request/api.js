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
//搜索窗口数据
var searchApi = baseUrl + '/search/index'
//清除历史记录
var clearHistoryApi = baseUrl + '/search/clearhistory'
//事实搜索
var searchDataApi = baseUrl + '/search/helper'
//搜索框商品搜索
var goodsDataApi = baseUrl + '/goods/list'
//商品详情页
var goodsDetailApi = baseUrl + '/goods/detail'
//相关产品
var goodsAboutApi = baseUrl + '/goods/related'
//获取购物车产品数量
var goodsCountApi = baseUrl + '/cart/goodscount'
//加入购物车
var cartAddApi = baseUrl + '/cart/add'
//获取购物车数据
var cartIndexApi = baseUrl + '/cart/index'
//点击切换商品选中状态（含全选）
var cartCheckedApi = baseUrl + '/cart/checked'
//商品步进器
var cartUpdateApi = baseUrl + '/cart/update'
//删除商品
var cartDeleteApi = baseUrl + '/cart/delete'

module.exports = {
  homeApi: homeApi,
  searchApi: searchApi,
  loginApi: loginApi,
  clearHistoryApi:clearHistoryApi,
  searchDataApi:searchDataApi,
  goodsDataApi:goodsDataApi,
  goodsDetailApi:goodsDetailApi,
  goodsAboutApi:goodsAboutApi,
  goodsCountApi:goodsCountApi,
  cartAddApi:cartAddApi,
  cartIndexApi:cartIndexApi,
  cartCheckedApi:cartCheckedApi,
  cartUpdateApi:cartUpdateApi,
  cartDeleteApi:cartDeleteApi

}