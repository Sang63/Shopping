// pages/cart/cart.js
Page({
    data: {

    },
    onLoad: function (options) {

    },
    onShow: function () {
        let token=wx.getStorageSync('token');
        if(!token){
             //获取当前页面栈
        let arr = getCurrentPages()
        //拿到当前页面的路由
        let route = '/'+arr[arr.length-1].route;
        //将当前页面路由存起来
        wx.setStorageSync('route', route);
        console.log(getCurrentPages());
            wx.showLoading({
              title: '请先登录！',
            })
            setTimeout(()=>{
                //跳转界面
                wx.switchTab({
                    url: '/pages/user/user',
                  })
            },1500)
            
            return;
        }

    },
})