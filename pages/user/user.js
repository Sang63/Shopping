// pages/user/user.js
const {LoginFn} =require("../../request/fetch");
import Dialog from '../../utils/dialog.js';
Page({
    data: {
        gridArr: [{
                icon: "label-o",
                txt: "我的订单"
            },
            {
                icon: "bill-o",
                txt: "优惠券"
            },
            {
                icon: "goods-collect-o",
                txt: "礼品卡"
            },
            {
                icon: "location-o",
                txt: "我的收藏"
            },
            {
                icon: "flag-o",
                txt: "我的足迹"
            },
            {
                icon: "contact",
                txt: "会员福利"
            },
            {
                icon: "aim",
                txt: "地址管理"
            },
            {
                icon: "warn-o",
                txt: "账号安全"
            },
            {
                icon: "service-o",
                txt: "联系客服"
            },
            {
                icon: "question-o",
                txt: "帮助中心"
            },
            {
                icon: "smile-comment-o",
                txt: "意见反馈"
            }
        ],
        //是否登陆
        isLogin:false,
        //遮罩层显示隐藏
        show: false,
        //用户名
        username: '',
        //密码
        password: '',
        nickname: '点击登录',
        avatar:'../../assets/images/default_avatar.png',
    },
    //遮罩层点击事件
    onClickHide() {
    this.setData({ show: false });
    },
    onClickShow() {
        let token=wx.getStorageSync('token')
        if(!token){
            //没有token证明未登录
          this.setData({ show: true });
        }
    },
    //登陆
    submitFn(){
      LoginFn({
          username: this.data.username,
          pwd: this.data.password
      }).then(res=>{
          console.log(res);
          if(res.errno===0){
            let {token,userInfo} = res.data;
            let userInfo1=JSON.stringify(userInfo);
            //保存
            wx.setStorageSync('token', token);
            wx.setStorageSync('userInfo', userInfo1);
            //关闭model
            //显示用户头像与昵称
            this.setData({
                nickname:userInfo.username,
                avatar:userInfo.avatar,
                show:false,
                isLogin:true
            })
          }
      })
    },
    onLoad(){
        let userInfo=wx.getStorageSync('userInfo');
        if(userInfo){
            let userInfo1=JSON.parse(userInfo);
            //修改头像与昵称
            this.setData({
                nickname:userInfo1.username,
                avatar:userInfo1.avatar,
                isLogin:true
            })
        }
    },
    //登出
    logout(){
        Dialog.alert({
            title: '退出登录',
            message: '请确认退出登录！！！',
            showCancelButton:true
          })
            .then(() => {
              //清除storage
              wx.removeStorageSync('token');
              wx.removeStorageSync('userInfo');
              //恢复头像，昵称，小图标
              this.setData({
                avatar:'../../assets/images/default_avatar.png',
                  nickname:"点击登录",
                  isLogin:false
              })
            })
            .catch(() => {
              // on cancel
            });
    }
})
