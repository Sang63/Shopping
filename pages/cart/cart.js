// pages/cart/cart.js
const{cartIndexFn,addCheckFn,addUpdateFn,cartDeleteFn} = require("../../request/fetch")
Page({
    data: {
        cartList:[],
        cartTotal:{},
        //复选框选中状态的数组
        result:[],
        //编辑状态
        editStatus:true,//true表示绿色，false表示红色
    },
    //步进器
    stepChange(e){
        addUpdateFn({
            goodsId:e.currentTarget.dataset.item.goods_id,
            id:e.currentTarget.dataset.item.id,
            number:e.detail,
            productId:e.currentTarget.dataset.item.product_id,
        }).then(res=>{
            if(res.errno===0){
                this.renderFn(res);
            }
        })
    },
    onLoad: function () {
        let token=wx.getStorageSync('token');
        if(token){
            cartIndexFn().then(res=>{
                console.log(res.data.cartList);
                if(res.errno===0){
                    this.renderFn(res);
                }
            })
        }
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
    //单选切换
    checkboxChange(e){
        //获取商品id
        let pid = e.currentTarget.dataset.pid.toString();
        //判断是否被勾选
        // this.data.result.indexOf(pid)
        addCheckFn({
            isChecked:this.data.result.indexOf(pid)===-1?1:0,
            productIds: pid
        }).then(res=>{
            if(res.errno===0){
                //调用渲染函数
                this.renderFn(res);
            }
        })
    },
    renderFn(res){
        let {cartList,cartTotal} = res.data;
                    //每一项的checked为1时，就把product_id放到result数组中
                    let result1=[];
                    cartList.map(item=>{
                        if(item.checked==1){
                            result1.push(item.product_id.toString())
                        }
                    })
                    this.setData({cartList,cartTotal,result:result1})

    },
    //订单提交
    submitFn(){
        wx.showToast({
          title: '该功能暂未开放',
          icon:'none',
          duration:2000
        })
    },
    //全选
    selectAll(event){
        //收集所有数组项的product_id
        let arr=[];
        this.data.cartList.forEach(item=>{
            arr.push(item.product_id);
        })
        addCheckFn({
            isChecked:event.detail?1:0,
            productIds:arr.join()
        }).then(res=>{
            if(res.errno===0){
                this.renderFn(res);
            }
        })
    },
    //点击了编辑按钮
    editStatus(){
        this.setData({
            editStatus:!this.data.editStatus
        })
    },
    //删除
    delGoodsFn(e){
        console.log(e.currentTarget.dataset.pid);
        let pid=e.currentTarget.dataset.pid.toString();
        cartDeleteFn({
            productIds:pid
        }).then(res=>{
            if(res.errno===0){
                this.renderFn(res);
            }
        })
    }
})