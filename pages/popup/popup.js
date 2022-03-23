// pages/popup/popup.js
const {getSearch,searchData,GoodsSearch} = require("../../request/fetch")
let timer=null;
Page({
    data: {
        value:'',
        //区块显示判断条件(1:history,2:list,3:goods)
        num:1,
        //默认数据 
        defaultKeyword:{},
        //历史区块数据
        historyKeywordList:[],
        //热门搜索
        hotKeywordList:[],
        //列表数组
        listArr:[],
        //产品数组
        goodsList:[],
        //分类数组
        filterCategory:[],
        //分类下拉选框的当前项
        categoryCurrent:-1,
        //页数
        page:1,
        //一页显示个数
        size:20,
        //价格上排列顺序
        order:"desc",
        //分类ID
        categoryID:0,
        sort:"id"
    },
    changePriceFn(val){
      //价格排序
      this.setData({order:val.detail,sort:"price"},()=>{
          this.onSearch();
      });
    },
    changeCategory(val){
        //分类排序   
        this.getData({categoryID:val.detail,sort:"id"},()=>{
            this.onSearch();
        })
    },
    onSearch(){
        //执行搜索，并且跳转到区块3（goods区块）
        GoodsSearch({
            keyword:this.data.value,
            page:this.data.page,
            size:this.data.size,
            order:this.data.order,
            categoryID:this.data.categoryID,
            sort:this.data.sort,
        }).then(res=>{
            if(res.errno===0){
                console.log(res.data);
                let {goodsList,filterCategory}=res.data;
                //替换分类下拉选框的数组字段
                let filterCategory1 = JSON.parse(JSON.stringify(filterCategory).replace(/id/g,'value').replace(/name/g,'text'));
                //确定分类下拉选框的当前项
                let categoryCurrent =-1;
                filterCategory1.forEach(item=>{
                    if(item.checked){
                        categoryCurrent = item.value;
                    }
                })
                this.setData({
                    goodsList,
                    filterCategory:filterCategory1,
                    categoryCurrent,
                    num:3
                })
            }
        })
    },
    inputFn(e){
      if(timer){
          clearTimeout(timer);
      }
      //防抖
      timer=setTimeout(()=>{
        this.inputSearchData(e);
      },100)

    },
    inputSearchData(e){
          //如何解决setData性能问题，减少setData使用？
        //1.this.setData(obj,callback)数据更新是同步的，但视图更新是异步的
        //2.它的应用是将data中的数据全部更新一遍，改变的使用改变后的，未改变的重新赋值
    //    this.setData({value:e.detail},()=>{
    //        searchData({
    //            keyword:this.data.value
    //        }).then(res=>{
    //            console.log(res);
    //            if(res.errno===0){
    //                //显示list组件
    //                console.log(res.data);
    //                this.setData({listArr:res.data,num:2})
    //            }
    //        })
    //    })
    searchData({
        keyword:e.detail
    }).then(res=>{
        if(res.errno===0){
            //显示list组件
            this.setData({listArr:res.data,num:2,value:e.detail})
        }else{
            this.setData({value:e.detail})
        }
    }).catch(()=>{
        this.setData({value:e.detail})
    })
    },
    onCancel(){
        wx.navigateBack()
    },
    onLoad(){
        this.getData();
    },
    getData(){
        getSearch().then(res=>{
            if(res.errno===0){
                console.log(res);
                let {defaultKeyword,historyKeywordList,hotKeywordList}=res.data;
                this.setData({defaultKeyword,historyKeywordList,hotKeywordList})
            }
        })
    },
    //清除历史记录后触发的刷新
    refresh(){
        this.getData();
    },
    goSearchFn(val){
        this.setData({value:val.detail},()=>{
            //执行搜索
        this.onSearch();
        });
        
    }
})