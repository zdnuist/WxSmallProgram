// pages/home.js

var config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    advert: [
    ],

    cellHeight:'',

    index: 1

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.weiboAuth()

    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        that.setData({
          cellHeight: (windowWidth / 2) + "px"
        });
      }
    });

    this.requestAdvertData();
    this.requestHotData();
  },


  requestAdvertData: function(){
    var self = this;
    wx.request({
      url: config.service.advert,
      success: function(res) {
        var list = res.data;
        for(var i = 0 ; i < list.length; i++){
          var index = list[i].src.indexOf('.jpg');
          list[i].src = config.service.host + list[i].src.substring(0,index)+ "_small.jpg";
          // console.log(list[i].src);
        }
        self.setData({
          advert: list
        })
      }
    });
  },

  requestHotData: function(){
    var self = this;
    wx.request({
      url: config.service.hot + "?index=" + this.data.index,
      success: function(res) {
        
        var list = res.data.list;
        self.index = res.data.index;
        console.log(list.length);
        for(var i = 0 ; i < list.length; i++){
          list[i].url = config.service.host + list[i].url;
          list[i].thumb = config.service.host + list[i].thumb;
        }

         var pageItems = [];
         var row = [];
         var len = list.length;
         len = Math.floor((len) / 2) * 2;
         for (var i = 0; i < len; i++) {
           if ((i + 1) % 2 == 0) {
             row.push(list[i]);
             pageItems.push(row);
             row = [];
             continue;
           }
           else {
             row.push(list[i]);
           }
         }

         console.log(pageItems);

         self.setData({
           pageItems: pageItems
         })

      }

    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  jumpNewPage(e) {
    console.log(e);
    var url = e.currentTarget.dataset.routerSrc;
    if(url){
      // var index = url.indexOf('http');
      // if(index == 0){
      //   wx.navigateTo({
      //     url: '../webpage/webpage?url=' + url
      //  })
      // }else{
      //   wx.navigateTo({
      //     url: url
      //  })
      // }

      wx.previewImage({
       current: url,
       urls: [url]
      });
    }
  }
})