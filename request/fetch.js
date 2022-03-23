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

//获取购物车数据
function cartIndexFn() {
  return request.requestApi({
    url: api.cartIndexApi,
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

//加入购物车
function addToCartFn(params) {
  return request.requestApi({
    url: api.cartAddApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}

//商品明细
function GoodsDetailFn(params) {
  return request.requestApi({
    url: api.goodsDetailApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}

//相关产品
function goodsAboutFn(params) {
  return request.requestApi({
    url: api.goodsAboutApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}

//购物车数据请求
function goodsCountFn() {
  return request.requestApi({
    url: api.goodsCountApi,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
  })
}

//点击切换商品选中状态（含全选）
function addCheckFn(params) {
  return request.requestApi({
    url: api.cartCheckedApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}

//商品步进器
function addUpdateFn(params) {
  return request.requestApi({
    url: api.cartUpdateApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      // 'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST'
  })
}

//删除商品
function cartDeleteFn(params) {
  return request.requestApi({
    url: api.cartDeleteApi,
    data: params,
    header: {
      'X-Nideshop-Token':wx.getStorageSync('token') || '',
      // 'content-type': 'application/x-www-form-urlencoded'
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
  GoodsSearch,
  GoodsDetailFn,
  goodsAboutFn,
  goodsCountFn,
  addToCartFn,
  cartIndexFn,
  addCheckFn,
  addUpdateFn,
  cartDeleteFn
  
}