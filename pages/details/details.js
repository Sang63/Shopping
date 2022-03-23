// pages/details/details.js
const {
    GoodsDetailFn,
    goodsAboutFn,
    goodsCountFn,
    addToCartFn
} = require("../../request/fetch")
//存储商品ID
let goodsId = 0;
Page({
    data: {
        gallery: [],
        info: {},
        isSaved: false,
        attribute: [],
        issue: [],
        goodsList: [],
        goodsCount: 0,
        productList:[],
        //步进器
        stepNum: 1,
        //false表示关闭sku
        isShowSku: false
    },
    onLoad: function (options) {
        //获取设备机型以及是否为iponex
        //let modelmes = wx.getStorageSync('modelmes');
        let isIphoneX = getApp().globalData.isIphoneX;
        this.setData({
            isIphoneX: isIphoneX
        })

        goodsId = options.id;
        GoodsDetailFn({
            id: goodsId
        }).then(res => {
            if (res.errno === 0) {
                console.log(res.data);
                let {
                    attribute,
                    brand,
                    comment,
                    gallery,
                    info,
                    issue,
                    productList,
                    specificationList
                } = res.data;
                info.goods_desc = info.goods_desc.replace(/<img/g, '<img class="myimg"');
                this.setData({
                    attribute,
                    brand,
                    comment,
                    gallery,
                    info,
                    issue,
                    productList,
                    specificationList
                })
            }
        })

        //获取相关产品
        goodsAboutFn({
            id: goodsId
        }).then(res => {
            console.log(res);
            if (res.errno == 0) {
                this.setData({
                    goodsList: res.data.goodsList
                })
            }
        })

        let token = wx.getStorageSync('token')
        if (token) {
            //获取购物车数量
            goodsCountFn().then(res => {
                console.log(res);
                if (res.errno === 0) {
                    this.setData({
                        goodsCount: res.data.cartTotal.goodsCount
                    })
                }
            })
        }
    },
    //步进器方法
    onChange(event) {
        console.log(event.detail);
        this.setData({
            stepNum: event.detail
        })
    },
    //打开sku
    openSku() {
        this.setData({
            isShowSku: true
        })
    },
    //关闭sku
    closeSku() {
        this.setData({
            isShowSku: false
        })
    },
    //收藏图标点击
    saveClick() {
        this.setData({
            isSaved: !this.data.isSaved
        })
    },
    //加入购物车
    addToCart() {
        //先判断sku状态
        if (this.data.isShowSku) {
            //已打开,判断是否登录
            let token = wx.getStorageSync('token');
            if (token) {
                //执行加入购物车的ajax操作
                addToCartFn({
                    goodsId:goodsId,
                    number:this.data.stepNum,
                    productId:this.data.productList[0].id
                }).then(res=>{
                    if(res.errno===0){
                        this.setData({
                            goodsCount:res.data.cartTotal.goodsCount,
                            isShowSku:false
                        })
                    }
                })
            } else {
                //登录
                //获取当前页面栈
                let arr = getCurrentPages()
                //拿到当前页面的路由
                let route = '/' + arr[arr.length - 1].route+'?id='+goodsId;
                //将当前页面路由存起来
                wx.setStorageSync('route', route);
                wx.showLoading({
                    title: '请先登录！',
                })
                setTimeout(() => {
                    //跳转界面
                    wx.switchTab({
                        url: '/pages/user/user',
                    })
                }, 1500)
            }

        } else {
            this.openSku();
        }
    },
    //跳转购物车界面
    goCart(){
        wx.switchTab({
          url: '/pages/cart/cart',
        })
    },
    //立即购买
    buyNow() {
        wx.showToast({
            title: '该功能暂未开放',
            icon: 'none',
            duration: 2000
        })
    }
})