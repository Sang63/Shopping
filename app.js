// app.js
App({
  // 调用wx.getSystemInfo，获得手机型号（res.model），并存储为全局变量
  onLaunch: function () {
    let _self = this;
    wx.getSystemInfo({
      success: (res) => {
        let modelmes = res.model;
        if (modelmes.search("iPhone X") != -1) {
          _self.globalData.isIphoneX = true;
        }
        // wx.setStorageSync("modelmes", modelmes);
      },
    });
  },
  globalData: {
    userInfo: {},
  },
});
