// pages/home/home.js
const {getHome} = require("../../request/fetch")
Page({
    data: {
      banner:[]
    },
    onLoad: function (options) {
      //获取首页数据
      getHome().then(res=>{
          console.log(res);
          if(res.errno===0){
              let {banner} = res.data;
              this.setData({banner})
            }
      })
          
    },

    onReady: function () {

    },
    onShow: function () {

    },
    onHide: function () {

    },
    onUnload: function () {

    },

    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },

    onShareAppMessage: function () {

    }
})