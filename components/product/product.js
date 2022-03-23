Component({
    properties:{
        goodsList:{
            type:Array,
            value:[]
        }
    },
    methods:{
        goDetails(e){
            wx.navigateTo({
              url: `/pages/details/details?id=${e.currentTarget.dataset.myid}`, //使用ES6最简便的携带参数的方式
            })
        }
    }
})