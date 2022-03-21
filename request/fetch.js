var api = require('./api.js')
var request = require('./request.js')

// 获取首页数据
function getHome() {
  return request.requestApi({
    url: api.homeApi
  })
}

//搜索窗口数据
function getSearch() {
  return request.requestApi({
    url: api.searchApi,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}

// 实时搜索
function searchData(params) {
  return request.requestApi({
    url: api.searchDataApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}
//商品搜索
function GoodsSearch(params) {
  return request.requestApi({
    url: api.goodsDataApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}

// 登录
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

//清除历史记录
function clearHistoryFn() {
  return request.requestApi({
    url: api.clearHistoryApi,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}

module.exports = {
  getHome,
  LoginFn,
  getSearch,
  clearHistoryFn,
  searchData,
  GoodsSearch
  
}